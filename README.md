# [Node.js library for USB Video Class (UVC) devices](https://joelpurra.com/projects/node-libuvc/) (`node-libuvc`)

Low-level Node.js library for [USB Video Class](https://en.wikipedia.org/wiki/USB_video_device_class) (UVC) devices, wrapping the cross-platform [`libuvc`](https://ken.tossell.net/libuvc/) C library. Used to write software for webcams, camcorders, etcetera.

[UVC-compliant devices](https://en.wikipedia.org/wiki/List_of_USB_video_class_devices) include webcams, digital camcorders, transcoders, analog video converters and still-image cameras.

- To change settings of your UVC camera from the command line, use [`uvcc`](https://joelpurra.com/projects/uvcc).
- To implement new UVC software in Node.js, use [`node-uvc`](https://joelpurra.com/projects/node-uvc).

## Features

- None so far?

## Installation

Requires [Node.js](https://nodejs.org/) (`node` and `npm` commands). Published on npm as [`libuvc`](https://www.npmjs.com/package/libuvc).

```shell
npm install --save libuvc
```

- Uses [`libvc`](https://ken.tossell.net/libuvc/).
- Tested using:
  - Node.js v12.16.1 on macOS 10.14 Mojave.
  - Node.js v12.16.1 on Ubuntu 19.10 Eoan.

## Usage

```javascript
// TODO
```

## Development

Get the source code from the [`node-libuvc` repository](https://github.com/joelpurra/node-libuvc).

Follow [git-flow](https://danielkummer.github.io/git-flow-cheatsheet/) and use [git-flow-avh](https://github.com/petervanderdoes/gitflow-avh).

```shell
# Make sure git-flow is initialized.
git flow init -d

npm run --silent test
```

## Todo

- Add tests.
- Compare readouts with the output from [`v4l2-ctl`](https://linuxtv.org/wiki/index.php/V4l-utils) ([man page](https://www.mankier.com/1/v4l2-ctl)) from [video4linux](https://linuxtv.org/).
  - `v4l2-ctl --list-devices`
  - `v4l2-ctl --list-ctrls`
  - `v4l2-ctl --all`
  - See for example the article [Manual USB camera settings in Linux](http://kurokesu.com/main/2016/01/16/manual-usb-camera-settings-in-linux/).

## See also

- User-friendly command line interface (CLI) [`uvcc`](https://joelpurra.com/projects/uvcc).
- Node.js helpers in [`node-uvc`](https://joelpurra.com/projects/node-uvc).
- [USB Video Class](https://en.wikipedia.org/wiki/USB_video_device_class) on Wikipedia.
- [List of USB video class devices](https://en.wikipedia.org/wiki/List_of_USB_video_class_devices) on Wikipedia.
- The wrapped [`libuvc`](https://ken.tossell.net/libuvc/) C library and the [`libuvc` source code](https://github.com/libuvc/libuvc).
- The even lower level library [`libusb`](http://libusb.info/) ([Wikipedia](https://en.wikipedia.org/wiki/Libusb)) and the corresponding [npm package `usb`](https://www.npmjs.com/package/usb).
- The [`v4l-utils`](https://linuxtv.org/wiki/index.php/V4l-utils) for [video4linux](https://www.linuxtv.org) ([Wikipedia](https://en.wikipedia.org/wiki/Video4Linux)), which includes [`v4l2-ctl`](https://www.mankier.com/1/v4l2-ctl).

## Acknowledgements

- [Ken Tossel](https://ken.tossell.net/) for creating `libuvc`.

---

[`node-libuvc`](https://joelpurra.com/projects/node-libuvc/) Copyright &copy; 2020, 2021 [Joel Purra](https://joelpurra.com/). Released under [GNU Lesser General Public License version 3.0 (LGPL-3.0)](https://www.gnu.org/licenses/lgpl.html). [Your donations are appreciated!](https://joelpurra.com/donate/)
