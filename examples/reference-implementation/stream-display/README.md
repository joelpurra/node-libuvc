# Stream webcam video and display them on screen

Reference implementation in C/C++. Tests that a compatible camera is connected, streams 10 seconds of video (image frames), and displays them in a window on the screen.

This is the [`libuvc` documentation example](https://ken.tossell.net/libuvc/doc/), with the on-screen display enabled.

# Additional requirements

- Tools:
  - [`make`](https://www.gnu.org/software/make/)
- Libraries:
  - [`libuvc`](https://ken.tossell.net/libuvc/) for capturing the stream of images.
  - [`opencv`](https://opencv.org/) for displaying the stream of images.

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

---

[`node-libuvc`](https://joelpurra.com/projects/node-libuvc/) Copyright &copy; 2020, 2021 [Joel Purra](https://joelpurra.com/). Released under [GNU Lesser General Public License version 3.0 (LGPL-3.0)](https://www.gnu.org/licenses/lgpl.html). [Your donations are appreciated!](https://joelpurra.com/donate/)
