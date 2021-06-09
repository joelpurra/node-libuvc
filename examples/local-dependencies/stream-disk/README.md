# Stream webcam video to disk

Reference implementation in C. Tests that a compatible camera is connected, streams 10 seconds of video (image frames), and saves them to a file on disk.

This is the [`libuvc` documentation example](https://ken.tossell.net/libuvc/doc/), but it saves the video to disk. It uses the locally built dependencies used by this package.

# Additional requirements

- Tools:
  - [`clang`](https://clang.llvm.org/)
- Libraries:
  - [`libuvc`](https://ken.tossell.net/libuvc/) for capturing the stream of images.

# Building

Build the package dependencies in the root.

```shell
npm run --silent build
```

```shell
clang -o stream-disk stream-disk.c -I"${PWD}/../../../dependencies/build/libuvc/include" -I"${PWD}/../../../dependencies/build/libusb/include" -I"${PWD}/../../../dependencies/build/libjpeg/include" -L"${PWD}/../../../dependencies/build/libuvc/lib" -L"${PWD}/../../../dependencies/build/libusb/lib" -L"${PWD}/../../../dependencies/build/libjpeg/lib" -luvc -lusb-1.0 -ljpeg -ludev -pthread
```

# Usage

See the terminal for some debugging output, and the output file `stream-disk.mjpeg`.

```shell
LD_LIBRARY_PATH="${PWD}/../../../dependencies/build/libuvc/lib:${PWD}/../../../dependencies/build/libjpeg/lib" ./stream-disk
```

# Output

The output file is `stream-disk.mjpeg`. See [file formats](../../README.md#file-formats) for convenient conversions.

---

[`node-libuvc`](https://joelpurra.com/projects/node-libuvc/) Copyright &copy; 2020, 2021 [Joel Purra](https://joelpurra.com/). Released under [GNU Lesser General Public License version 3.0 (LGPL-3.0)](https://www.gnu.org/licenses/lgpl.html). [Your donations are appreciated!](https://joelpurra.com/donate/)
