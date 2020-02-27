# Stream webcam video to disk

Reference implementation in C. Tests that a compatible camera is connected, stream 10 seconds of video (image frames), and saves them to a file on disk.

This is the [`libuvc` documentation example](https://ken.tossell.net/libuvc/doc/) by [Ken Tossell](https://ken.tossell.net/), but it saves the video to disk.

# Requirements

- Tools:
  - [`clang`](https://clang.llvm.org/)
- Libraries:
  - [`libuvc`](https://ken.tossell.net/libuvc/) for capturing the stream of images.
- Optional:
  - [`ffmpeg`](https://ffmpeg.org/) to convert from [Motion JPEG](https://en.wikipedia.org/wiki/Motion_JPEG) to a different format.
- A supported, and connected, UVC camera.

# Building

```shell
clang stream-disk.c -luvc -o stream-disk
```

# Usage

See the terminal for some debugging output, and the output file `stream-disk.mjpeg`.

```shell
./stream-disk
```

# Output

The output file is `stream-disk.mjpeg`. See [file formats](../README.md#file-formats) for convenient conversions.
