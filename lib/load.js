/*
This file is part of node-libuvc -- Library for USB Video Class (UVC) devices.
Copyright (C) 2020 Joel Purra <https://joelpurra.com/>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.
*/

const FFI = require("ffi-napi");
const getLibraryPath = require("./get-library-path");

const libraryPath = getLibraryPath();

// NOTE: loads the library "globally" into the current process.
// - Avoids loading the library once per header file.
// - Allows dependent libraries to reference it.
// TODO: consider using `RTLD_NOLOAD | RTLD_GLOBAL` to reopen/reload/expose `RTLD_LOCAL` libraries.
// https://linux.die.net/man/3/dlopen
const flags =
  FFI.DynamicLibrary.FLAGS.RTLD_NOW | FFI.DynamicLibrary.FLAGS.RTLD_GLOBAL;

// TODO: close/unload the libraries after use
const libraries = new FFI.DynamicLibrary(libraryPath, flags);

// NOTE: will automatically use the in-memory libraries.
const libuvc = require("./libuvc");

module.exports = libuvc;
