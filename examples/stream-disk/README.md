# Stream webcam video to disk

Tests that a compatible camera is connected, stream 10 seconds of video (image frames), and saves them to a file on disk.

This is the [`libuvc` documentation example](https://ken.tossell.net/libuvc/doc/) converted to javascript, but it saves the video to disk.

# Building

Build the package dependencies in the root.

```shell
npm run --silent build
```

# Usage

See the terminal for some debugging output, and the output file `stream-disk.mjpeg`.

```shell
node stream-disk.js
```

# Output

The output file is `stream-disk.mjpeg`. See [file formats](../README.md#file-formats) for convenient conversions.

---

[`node-libuvc`](https://joelpurra.com/projects/node-libuvc/) Copyright &copy; 2020, 2021 [Joel Purra](https://joelpurra.com/). Released under [GNU Lesser General Public License version 3.0 (LGPL-3.0)](https://www.gnu.org/licenses/lgpl.html). [Your donations are appreciated!](https://joelpurra.com/donate/)
