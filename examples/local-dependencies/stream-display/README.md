# Stream webcam video and display them on screen

Reference implementation in C/C++. Tests that a compatible camera is connected, stream 10 seconds of video (image frames), and displays them in a window on the screen.

This is the [`libuvc` documentation example](https://ken.tossell.net/libuvc/doc/) by [Ken Tossell](https://ken.tossell.net/), with the on-screen display enabled. It uses the locally built dependencies used by this package, but builds them in this directory.

# Requirements

- Libraries:
  - [`opencv`](https://opencv.org/) for displaying the stream of images.
- A supported, and connected, UVC camera.

# Building

Using the package dependency [`cmake-js`](https://github.com/cmake-js/cmake-js/) instead of [`cmake`](https://cmake.org/) to share build default values with the package build.

```shell
npx cmake-js compile
```

# Usage

See the terminal for some debugging output, and the newly opened window for 10 seconds of streaming video from the camera.

```shell
./build/stream-display
```
