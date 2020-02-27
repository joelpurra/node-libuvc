# Stream webcam video and display them on screen

Reference implementation in C/C++. Tests that a compatible camera is connected, stream 10 seconds of video (image frames), and displays them in a window on the screen.

This is the [`libuvc` documentation example](https://ken.tossell.net/libuvc/doc/) by [Ken Tossell](https://ken.tossell.net/), with the on-screen display enabled.

# Requirements

- Tools:
  - [`cmake`](https://cmake.org/)
  - [`make`](https://www.gnu.org/software/make/)
- Libraries:
  - [`libuvc`](https://ken.tossell.net/libuvc/) for capturing the stream of images.
  - [`opencv`](https://opencv.org/) for displaying the stream of images.
- A supported, and connected, UVC camera.

# Building

```shell
cmake .
make
```

# Usage

See the terminal for some debugging output, and the newly opened window for 10 seconds of streaming video from the camera.

```shell
./stream-display
```
