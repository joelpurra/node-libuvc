/* Software License Agreement (BSD License)
 *
 * Copyright (C) 2010-2015 Ken Tossell
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of the author nor other contributors may be
 *    used to endorse or promote products derived from this software
 *    without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
 * FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
 * ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

#include <libuvc/libuvc.h>
#include <stdio.h>
#include <unistd.h>

/* This callback function runs once per frame. Use it to perform any
 * quick processing you need, or have it put the frame into your application's
 * input queue. If this function takes too long, you'll start losing frames. */
void cb(uvc_frame_t *frame, void *ptr)
{
  FILE *file = ((FILE *)ptr);
  uvc_error_t ret;
  /* Call a user function:
   *
   * my_type *my_obj = (*my_type) ptr;
   * my_user_function(ptr, bgr);
   * my_other_function(ptr, bgr->data, bgr->width, bgr->height);
   */
  /* Call a C++ method:
   *
   * my_type *my_obj = (*my_type) ptr;
   * my_obj->my_func(bgr);
   */
  /* Write each frame to disk: */
  fwrite(frame->data, 1, frame->data_bytes, file);
}
int main(int argc, char **argv)
{
  const char *filename = "stream-disk.mjpeg";
  uvc_context_t *ctx;
  uvc_device_t *dev;
  uvc_device_handle_t *devh;
  uvc_stream_ctrl_t ctrl;
  uvc_error_t res;
  /* Initialize a UVC service context. Libuvc will set up its own libusb
   * context. Replace NULL with a libusb_context pointer to run libuvc
   * from an existing libusb context. */
  res = uvc_init(&ctx, NULL);
  if (res < 0)
  {
    uvc_perror(res, "uvc_init");
    return res;
  }
  puts("UVC initialized");
  /* Locates the first attached UVC device, stores in dev */
  res = uvc_find_device(
      ctx, &dev,
      0, 0, NULL); /* filter devices: vendor_id, product_id, "serial_num" */
  if (res < 0)
  {
    uvc_perror(res, "uvc_find_device"); /* no devices found */
  }
  else
  {
    puts("Device found");
    /* Try to open the device: requires exclusive access */
    res = uvc_open(dev, &devh);
    if (res < 0)
    {
      uvc_perror(res, "uvc_open"); /* unable to open device */
    }
    else
    {
      puts("Device opened");
      /* Print out a message containing all the information that libuvc
       * knows about the device */
      uvc_print_diag(devh, stderr);
      /* Try to negotiate a 640x480 30 fps YUYV stream profile */
      res = uvc_get_stream_ctrl_format_size(
          devh, &ctrl,            /* result stored in ctrl */
          UVC_FRAME_FORMAT_MJPEG, /* MJPEG for writing to disk */
          640, 480, 30            /* width, height, fps */
      );
      /* Print out the result */
      uvc_print_stream_ctrl(&ctrl, stderr);
      if (res < 0)
      {
        uvc_perror(res, "get_mode"); /* device doesn't provide a matching stream */
      }
      else
      {
        /* Start the video stream. The library will call user function cb:
         *   cb(frame, (void*) user_ptr)
         */
        FILE *file = fopen(filename, "wb");
        void *user_ptr = file;
        res = uvc_start_streaming(devh, &ctrl, cb, user_ptr, 0);
        if (res < 0)
        {
          fclose(file);
          uvc_perror(res, "start_streaming"); /* unable to start stream */
        }
        else
        {
          puts("Streaming...");
          uvc_set_ae_mode(devh, 1); /* e.g., turn on auto exposure */
          sleep(10);                /* stream for 10 seconds */
          /* End the stream. Blocks until last callback is serviced */
          uvc_stop_streaming(devh);
          fclose(file);
          puts("Done streaming.");
        }
      }
      /* Release our handle on the device */
      uvc_close(devh);
      puts("Device closed");
    }
    /* Release the device descriptor */
    uvc_unref_device(dev);
  }
  /* Close the UVC context. This closes and cleans up any existing device handles,
   * and it closes the libusb context if one was not provided. */
  uvc_exit(ctx);
  puts("UVC exited");
  return 0;
}
