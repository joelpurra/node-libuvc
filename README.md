# [Node.js library for USB Video Class (UVC) devices](https://joelpurra.com/projects/node-libuvc/) (`node-libuvc`)

Low-level Node.js library for [USB Video Class](https://en.wikipedia.org/wiki/USB_video_device_class) (UVC) devices, wrapping the cross-platform [`libuvc`](https://ken.tossell.net/libuvc/) C library. Used to write software for webcams, camcorders, etcetera.

[UVC-compliant devices](https://en.wikipedia.org/wiki/List_of_USB_video_class_devices) include webcams, digital camcorders, transcoders, analog video converters and still-image cameras.

This is a experimental, proof-of-concept combining several technologies.

- [Conan](https://conan.io/) to download the [`libuvc`](https://www.npmjs.com/package/libuvc) C library, plus dependencies, for the current operating system/platform.
- [CMake.js](https://github.com/cmake-js/cmake-js) for C compilation/build.
- [@ffi-packager/ffi-generate](https://github.com/node-ffi-packager/node-ffi-generate) to generate [Foreign Function Interface (FFI)](https://en.wikipedia.org/wiki/Foreign_function_interface) bindings for `libuvc`.
- [`ffi-napi` and related libraries](https://github.com/node-ffi-napi), to dynamically load the `libuvc` bindings.

This proof-of-concept lead to the development of [node-ffi-packager](https://github.com/node-ffi-packager/node-ffi-packager).

## Features

- All functionality of [`libuvc`](https://www.npmjs.com/package/libuvc) available in Node.js.
- Strictly follows the [`libuvc.h`](https://github.com/libuvc/libuvc/blob/v0.0.6/include/libuvc/libuvc.h) C header file.
- Enables C-style programming.
  - This style is different from the usual conveniences of modern Javascript.
  - This low-level library was primarily created to enable building other libraries, where developer convenience can be a goal.

## Requirements

- [Node.js](https://nodejs.org/) (`node` and `npm` commands)
- Dependencies required by [CMake.js](https://github.com/cmake-js/cmake-js):
  - [CMake](http://www.cmake.org/download/)
  - A C/C++ compiler toolchain for your operating system/platform, such as:
    - [Clang](https://clang.llvm.org/)
    - [GNU Compiler Collection (GCC)](https://gcc.gnu.org/)
    - [Ninja](https://ninja-build.org/)
    - [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
    - [Visual Studio Community](https://www.visualstudio.com/products/visual-studio-community-vs)
- [Conan](https://conan.io/)
- A supported, and connected, [UVC camera](https://en.wikipedia.org/wiki/List_of_USB_video_class_devices).

## Installation

Use a [`package.json`](https://docs.npmjs.com/configuring-npm/package-json.html) reference to your preferred [semantic version](https://semver.org/) [`node-libuvc` git tag](https://github.com/joelpurra/node-libuvc/tags).

```shell
npm install --save github:joelpurra/node-libuvc#semver:^v1.0.0
```

## Usage

See [`./examples/`](./examples/) for ready-to-run code.

```javascript
const libuvc = require("libuvc");
const ref = require("ref-napi");

// NOTE: C types in comments for reference.
const /* uvc_context_t * */ ctx = ref.alloc(libuvc.types.uvc_context_tPointer);
const /* uvc_device_t * */ dev = ref.alloc(libuvc.types.uvc_device_tPointer);
const /* uvc_device_handle_t * */ devh = ref.alloc(
    libuvc.types.uvc_device_handle_tPointer
  );
const /* uvc_stream_ctrl_t */ ctrl = ref.alloc(libuvc.types.uvc_stream_ctrl_t);
let /* uvc_error_t */ res;

res = libuvc.functions.uvc_init(/* & */ ctx, null);
res = libuvc.functions.uvc_find_device(ctx.deref(), /* & */ dev, 0, 0, null);
res = libuvc.functions.uvc_open(dev.deref(), /* & */ devh);

// NOTE: use the UVC device here, for example setting controls and streaming image frames.

libuvc.functions.uvc_close(devh.deref());
libuvc.functions.uvc_unref_device(dev.deref());
libuvc.functions.uvc_exit(ctx.deref());
```

## Building

The package should be automatically built by `npm install`. You can also manually (re)build the package dependencies.

```shell
npm run --silent build
```

## Development

- Requires a UVC device, such as a compatible webcam.
- Get the source code from the [`node-libuvc` repository](https://github.com/joelpurra/node-libuvc).
- Follow [git-flow](https://danielkummer.github.io/git-flow-cheatsheet/) and use [git-flow-avh](https://github.com/petervanderdoes/gitflow-avh).
- Make sure that all example code works by testing them manually.

```shell
# Make sure git-flow is initialized.
git flow init -d

npm run --silent rebuild

npm run --silent test
```

## See also

- [`@ffi-libraries/libuvc-v0.0.6`](https://github.com/node-ffi-libraries/node-ffi-library-libuvc-v0.0.6) for prebuilt binaries.
  - Generated by [node-ffi-packager](https://github.com/node-ffi-packager/node-ffi-packager), which automates the manual proof-of-concept steps in this repository.
- [`node-uvc`](https://joelpurra.com/projects/node-uvc) which implements a developer-friendly Javascript layer on top of `@ffi-libraries/libuvc-v0.0.6`.
- [`node-uvc-control`](https://github.com/makenai/node-uvc-control) for a UVC controls implementation based on [`node-usb`](https://github.com/tessel/node-usb) ([npm package `usb`](https://www.npmjs.com/package/usb)), which in turn is based on [`libusb`](http://libusb.info/) ([Wikipedia](https://en.wikipedia.org/wiki/Libusb)).
- [`uvcc`](https://joelpurra.com/projects/uvcc) for a user-friendly command line interface (CLI) to change camera controls.
- [USB Video Class](https://en.wikipedia.org/wiki/USB_video_device_class) on Wikipedia.
- [List of USB video class devices](https://en.wikipedia.org/wiki/List_of_USB_video_class_devices) on Wikipedia.
- The [`v4l-utils`](https://linuxtv.org/wiki/index.php/V4l-utils) for [video4linux](https://www.linuxtv.org) ([Wikipedia](https://en.wikipedia.org/wiki/Video4Linux)), which includes [`v4l2-ctl`](https://www.mankier.com/1/v4l2-ctl).

## Acknowledgements

- [Ken Tossel](https://ken.tossell.net/) for creating `libuvc`.

---

[`node-libuvc`](https://joelpurra.com/projects/node-libuvc/) Copyright &copy; 2020, 2021 [Joel Purra](https://joelpurra.com/). Released under [GNU Lesser General Public License version 3.0 (LGPL-3.0)](https://www.gnu.org/licenses/lgpl.html). [Your donations are appreciated!](https://joelpurra.com/donate/)
