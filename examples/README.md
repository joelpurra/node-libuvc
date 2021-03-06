# `node-libuvc` examples

Examples are mainly written in javascript. There are also reference implementations in C/C++ to ensure the underlying libraries, such as `libuvc`, work.

## File formats

Some examples output files in various formats.

### Additional requirements

- [`ffmpeg`](https://ffmpeg.org/) to convert from [Motion JPEG](https://en.wikipedia.org/wiki/Motion_JPEG) to a different format.

### Motion JPEG

The output file `stream-disk.mjpeg` is in [Motion JPEG](https://en.wikipedia.org/wiki/Motion_JPEG) (MJPEG) format. It is just a series of concatenated [JPEG](https://en.wikipedia.org/wiki/JPEG) images, and does not contain the usual video metadata, such as framerate. Your regular video player should be able to open it, but because it lacks a defined framerate, the "video" renders at maximum speed -- and you might only see a single frame.

It is often possible to losslessly extract each frame as a JPEG image. Some cameras might have a slightly different MJPEG format where some repeated JPEG data is optimized away, which might not work with the lossless "copy" -- in that case, try removing `-vcodec copy` to recompress each JPEG image.

Note that the below command will produce hundreds of JPEG images, named `stream-disk.frame-0001.jpg` and so on.

```shell
ffmpeg -f mjpeg -i stream-disk.mjpeg -vcodec copy stream-disk.frame-%4d.jpg
```

The stream is captured at 30 frames per second (but may vary dynamically, depending on your camera and scene), so it can be converted to another video format which has this metadata. This will also generally reduce the file size significantly, as most video formats do not store each full frame image but the only difference between subsequent frames.

Use the below command to create `stream-disk.mp4`.

```shell
ffmpeg -f mjpeg -framerate 30 -i stream-disk.mjpeg stream-disk.mp4
```

---

[`node-libuvc`](https://joelpurra.com/projects/node-libuvc/) Copyright &copy; 2020, 2021 [Joel Purra](https://joelpurra.com/). Released under [GNU Lesser General Public License version 3.0 (LGPL-3.0)](https://www.gnu.org/licenses/lgpl.html). [Your donations are appreciated!](https://joelpurra.com/donate/)
