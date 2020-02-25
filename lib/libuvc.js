var FFI = require("ffi-napi"),
  ref = require("ref-napi"),
  ArrayType = require("ref-array-di")(ref),
  Struct = require("ref-struct-di")(ref),
  Union = require("ref-union-di")(ref);

var voidPtr = ref.refType(ref.types.void);

exports.CONSTANTS = {
  uvc_error: {
    UVC_SUCCESS: 0,
    UVC_ERROR_IO: -1,
    UVC_ERROR_INVALID_PARAM: -2,
    UVC_ERROR_ACCESS: -3,
    UVC_ERROR_NO_DEVICE: -4,
    UVC_ERROR_NOT_FOUND: -5,
    UVC_ERROR_BUSY: -6,
    UVC_ERROR_TIMEOUT: -7,
    UVC_ERROR_OVERFLOW: -8,
    UVC_ERROR_PIPE: -9,
    UVC_ERROR_INTERRUPTED: -10,
    UVC_ERROR_NO_MEM: -11,
    UVC_ERROR_NOT_SUPPORTED: -12,
    UVC_ERROR_INVALID_DEVICE: -50,
    UVC_ERROR_INVALID_MODE: -51,
    UVC_ERROR_CALLBACK_EXISTS: -52,
    UVC_ERROR_OTHER: -99,
    "0": "UVC_SUCCESS",
    "-1": "UVC_ERROR_IO",
    "-2": "UVC_ERROR_INVALID_PARAM",
    "-3": "UVC_ERROR_ACCESS",
    "-4": "UVC_ERROR_NO_DEVICE",
    "-5": "UVC_ERROR_NOT_FOUND",
    "-6": "UVC_ERROR_BUSY",
    "-7": "UVC_ERROR_TIMEOUT",
    "-8": "UVC_ERROR_OVERFLOW",
    "-9": "UVC_ERROR_PIPE",
    "-10": "UVC_ERROR_INTERRUPTED",
    "-11": "UVC_ERROR_NO_MEM",
    "-12": "UVC_ERROR_NOT_SUPPORTED",
    "-50": "UVC_ERROR_INVALID_DEVICE",
    "-51": "UVC_ERROR_INVALID_MODE",
    "-52": "UVC_ERROR_CALLBACK_EXISTS",
    "-99": "UVC_ERROR_OTHER"
  },
  uvc_status_class: {
    UVC_STATUS_CLASS_CONTROL: 16,
    UVC_STATUS_CLASS_CONTROL_CAMERA: 17,
    UVC_STATUS_CLASS_CONTROL_PROCESSING: 18,
    "16": "UVC_STATUS_CLASS_CONTROL",
    "17": "UVC_STATUS_CLASS_CONTROL_CAMERA",
    "18": "UVC_STATUS_CLASS_CONTROL_PROCESSING"
  },
  uvc_status_attribute: {
    UVC_STATUS_ATTRIBUTE_VALUE_CHANGE: 0,
    UVC_STATUS_ATTRIBUTE_INFO_CHANGE: 1,
    UVC_STATUS_ATTRIBUTE_FAILURE_CHANGE: 2,
    UVC_STATUS_ATTRIBUTE_UNKNOWN: 255,
    "0": "UVC_STATUS_ATTRIBUTE_VALUE_CHANGE",
    "1": "UVC_STATUS_ATTRIBUTE_INFO_CHANGE",
    "2": "UVC_STATUS_ATTRIBUTE_FAILURE_CHANGE",
    "255": "UVC_STATUS_ATTRIBUTE_UNKNOWN"
  },
  uvc_it_type: {
    UVC_ITT_VENDOR_SPECIFIC: 512,
    UVC_ITT_CAMERA: 513,
    UVC_ITT_MEDIA_TRANSPORT_INPUT: 514,
    "512": "UVC_ITT_VENDOR_SPECIFIC",
    "513": "UVC_ITT_CAMERA",
    "514": "UVC_ITT_MEDIA_TRANSPORT_INPUT"
  },
  uvc_frame_format: {
    UVC_FRAME_FORMAT_UNKNOWN: 0,
    UVC_FRAME_FORMAT_ANY: 0,
    UVC_FRAME_FORMAT_UNCOMPRESSED: 1,
    UVC_FRAME_FORMAT_COMPRESSED: 2,
    UVC_FRAME_FORMAT_YUYV: 3,
    UVC_FRAME_FORMAT_UYVY: 4,
    UVC_FRAME_FORMAT_RGB: 5,
    UVC_FRAME_FORMAT_BGR: 6,
    UVC_FRAME_FORMAT_MJPEG: 7,
    UVC_FRAME_FORMAT_GRAY8: 8,
    UVC_FRAME_FORMAT_GRAY16: 9,
    UVC_FRAME_FORMAT_BY8: 10,
    UVC_FRAME_FORMAT_BA81: 11,
    UVC_FRAME_FORMAT_SGRBG8: 12,
    UVC_FRAME_FORMAT_SGBRG8: 13,
    UVC_FRAME_FORMAT_SRGGB8: 14,
    UVC_FRAME_FORMAT_SBGGR8: 15,
    UVC_FRAME_FORMAT_COUNT: 16,
    "0": "UVC_FRAME_FORMAT_UNKNOWN",
    "0": "UVC_FRAME_FORMAT_ANY",
    "1": "UVC_FRAME_FORMAT_UNCOMPRESSED",
    "2": "UVC_FRAME_FORMAT_COMPRESSED",
    "3": "UVC_FRAME_FORMAT_YUYV",
    "4": "UVC_FRAME_FORMAT_UYVY",
    "5": "UVC_FRAME_FORMAT_RGB",
    "6": "UVC_FRAME_FORMAT_BGR",
    "7": "UVC_FRAME_FORMAT_MJPEG",
    "8": "UVC_FRAME_FORMAT_GRAY8",
    "9": "UVC_FRAME_FORMAT_GRAY16",
    "10": "UVC_FRAME_FORMAT_BY8",
    "11": "UVC_FRAME_FORMAT_BA81",
    "12": "UVC_FRAME_FORMAT_SGRBG8",
    "13": "UVC_FRAME_FORMAT_SGBRG8",
    "14": "UVC_FRAME_FORMAT_SRGGB8",
    "15": "UVC_FRAME_FORMAT_SBGGR8",
    "16": "UVC_FRAME_FORMAT_COUNT"
  },
  uvc_req_code: {
    UVC_RC_UNDEFINED: 0,
    UVC_SET_CUR: 1,
    UVC_GET_CUR: 129,
    UVC_GET_MIN: 130,
    UVC_GET_MAX: 131,
    UVC_GET_RES: 132,
    UVC_GET_LEN: 133,
    UVC_GET_INFO: 134,
    UVC_GET_DEF: 135,
    "0": "UVC_RC_UNDEFINED",
    "1": "UVC_SET_CUR",
    "129": "UVC_GET_CUR",
    "130": "UVC_GET_MIN",
    "131": "UVC_GET_MAX",
    "132": "UVC_GET_RES",
    "133": "UVC_GET_LEN",
    "134": "UVC_GET_INFO",
    "135": "UVC_GET_DEF"
  },
  uvc_device_power_mode: {
    UVC_VC_VIDEO_POWER_MODE_FULL: 11,
    UVC_VC_VIDEO_POWER_MODE_DEVICE_DEPENDENT: 27,
    "11": "UVC_VC_VIDEO_POWER_MODE_FULL",
    "27": "UVC_VC_VIDEO_POWER_MODE_DEVICE_DEPENDENT"
  }
};

var uvc_context_t = (exports.uvc_context_t = voidPtr);
var uvc_context_tPtr = (exports.uvc_context_tPtr = ref.refType(uvc_context_t));
var uvc_device_t = (exports.uvc_device_t = voidPtr);
var uvc_device_tPtr = (exports.uvc_device_tPtr = ref.refType(uvc_device_t));
var uvc_device_descriptor_t = (exports.uvc_device_descriptor_t = Struct({
  idVendor: ref.types.ushort,
  idProduct: ref.types.ushort,
  bcdUVC: ref.types.ushort,
  serialNumber: ref.types.CString,
  manufacturer: ref.types.CString,
  product: ref.types.CString
}));
var uvc_device_descriptor_tPtr = (exports.uvc_device_descriptor_tPtr = ref.refType(
  uvc_device_descriptor_t
));
var uvc_device_handle_t = (exports.uvc_device_handle_t = voidPtr);
var uvc_device_handle_tPtr = (exports.uvc_device_handle_tPtr = ref.refType(
  uvc_device_handle_t
));
var uvc_status_callback_t = (exports.uvc_status_callback_t = Struct({
  status_class: ref.types.uint32,
  event: ref.types.int32,
  selector: ref.types.int32,
  status_attribute: ref.types.uint32,
  data: voidPtr,
  data_len: ref.types.ulong,
  user_ptr: voidPtr
}));
var uvc_status_callback_tPtr = (exports.uvc_status_callback_tPtr = ref.refType(
  uvc_status_callback_t
));
var uvc_button_callback_t = (exports.uvc_button_callback_t = Struct({
  button: ref.types.int32,
  state: ref.types.int32,
  user_ptr: voidPtr
}));
var uvc_button_callback_tPtr = (exports.uvc_button_callback_tPtr = ref.refType(
  uvc_button_callback_t
));
var uvc_input_terminal_t = (exports.uvc_input_terminal_t = Struct({
  prev: voidPtr,
  next: voidPtr,
  bTerminalID: ref.types.uchar,
  wTerminalType: ref.types.uint32,
  wObjectiveFocalLengthMin: ref.types.ushort,
  wObjectiveFocalLengthMax: ref.types.ushort,
  wOcularFocalLength: ref.types.ushort,
  bmControls: ref.types.ulong
}));
var uvc_input_terminal_tPtr = (exports.uvc_input_terminal_tPtr = ref.refType(
  uvc_input_terminal_t
));
var uvc_output_terminal_t = (exports.uvc_output_terminal_t = Struct({
  prev: voidPtr,
  next: voidPtr
}));
var uvc_output_terminal_tPtr = (exports.uvc_output_terminal_tPtr = ref.refType(
  uvc_output_terminal_t
));
var uvc_selector_unit_t = (exports.uvc_selector_unit_t = Struct({
  prev: voidPtr,
  next: voidPtr,
  bUnitID: ref.types.uchar
}));
var uvc_selector_unit_tPtr = (exports.uvc_selector_unit_tPtr = ref.refType(
  uvc_selector_unit_t
));
var uvc_processing_unit_t = (exports.uvc_processing_unit_t = Struct({
  prev: voidPtr,
  next: voidPtr,
  bUnitID: ref.types.uchar,
  bSourceID: ref.types.uchar,
  bmControls: ref.types.ulong
}));
var uvc_processing_unit_tPtr = (exports.uvc_processing_unit_tPtr = ref.refType(
  uvc_processing_unit_t
));
var uvc_extension_unit_t = (exports.uvc_extension_unit_t = Struct({
  prev: voidPtr,
  next: voidPtr,
  bUnitID: ref.types.uchar,
  guidExtensionCode: ArrayType(ref.types.uchar, 16),
  bmControls: ref.types.ulong
}));
var uvc_extension_unit_tPtr = (exports.uvc_extension_unit_tPtr = ref.refType(
  uvc_extension_unit_t
));
var uvc_stream_ctrl_t = (exports.uvc_stream_ctrl_t = Struct({
  bmHint: ref.types.ushort,
  bFormatIndex: ref.types.uchar,
  bFrameIndex: ref.types.uchar,
  dwFrameInterval: ref.types.uint32,
  wKeyFrameRate: ref.types.ushort,
  wPFrameRate: ref.types.ushort,
  wCompQuality: ref.types.ushort,
  wCompWindowSize: ref.types.ushort,
  wDelay: ref.types.ushort,
  dwMaxVideoFrameSize: ref.types.uint32,
  dwMaxPayloadTransferSize: ref.types.uint32,
  dwClockFrequency: ref.types.uint32,
  bmFramingInfo: ref.types.uchar,
  bPreferredVersion: ref.types.uchar,
  bMinVersion: ref.types.uchar,
  bMaxVersion: ref.types.uchar,
  bInterfaceNumber: ref.types.uchar
}));
var uvc_stream_ctrl_tPtr = (exports.uvc_stream_ctrl_tPtr = ref.refType(
  uvc_stream_ctrl_t
));
var uvc_format_desc_t = (exports.uvc_format_desc_t = voidPtr);
var uvc_format_desc_tPtr = (exports.uvc_format_desc_tPtr = ref.refType(
  uvc_format_desc_t
));
var uvc_frame_callback_t = (exports.uvc_frame_callback_t = Struct({
  frame: voidPtr,
  user_ptr: voidPtr
}));
var uvc_frame_callback_tPtr = (exports.uvc_frame_callback_tPtr = ref.refType(
  uvc_frame_callback_t
));
var uvc_stream_handle_t = (exports.uvc_stream_handle_t = voidPtr);
var uvc_stream_handle_tPtr = (exports.uvc_stream_handle_tPtr = ref.refType(
  uvc_stream_handle_t
));
var uint8_t = (exports.uint8_t = Struct({
  __uint8_t: ref.types.uchar
}));
var uint8_tPtr = (exports.uint8_tPtr = ref.refType(uint8_t));
var uint32_t = (exports.uint32_t = Struct({
  __uint32_t: ref.types.uint32
}));
var uint32_tPtr = (exports.uint32_tPtr = ref.refType(uint32_t));
var int8_t = (exports.int8_t = Struct({
  __int8_t: ref.types.char
}));
var int8_tPtr = (exports.int8_tPtr = ref.refType(int8_t));
var uint16_t = (exports.uint16_t = Struct({
  __uint16_t: ref.types.ushort
}));
var uint16_tPtr = (exports.uint16_tPtr = ref.refType(uint16_t));
var int32_t = (exports.int32_t = Struct({
  __int32_t: ref.types.int32
}));
var int32_tPtr = (exports.int32_tPtr = ref.refType(int32_t));
var int16_t = (exports.int16_t = Struct({
  __int16_t: ref.types.short
}));
var int16_tPtr = (exports.int16_tPtr = ref.refType(int16_t));
var _IO_lock_t = (exports._IO_lock_t = voidPtr);
var _IO_lock_tPtr = (exports._IO_lock_tPtr = ref.refType(_IO_lock_t));
var _IO_FILE = (exports._IO_FILE = Struct({
  _flags: ref.types.int32,
  _IO_read_ptr: ref.types.CString,
  _IO_read_end: ref.types.CString,
  _IO_read_base: ref.types.CString,
  _IO_write_base: ref.types.CString,
  _IO_write_ptr: ref.types.CString,
  _IO_write_end: ref.types.CString,
  _IO_buf_base: ref.types.CString,
  _IO_buf_end: ref.types.CString,
  _IO_save_base: ref.types.CString,
  _IO_backup_base: ref.types.CString,
  _IO_save_end: ref.types.CString,
  _markers: voidPtr,
  _chain: voidPtr,
  _fileno: ref.types.int32,
  _flags2: ref.types.int32,
  _old_offset: ref.types.long,
  _cur_column: ref.types.ushort,
  _vtable_offset: ref.types.char,
  _shortbuf: ArrayType(ref.types.char, 1),
  _lock: _IO_lock_t,
  _offset: ref.types.long,
  _codecvt: voidPtr,
  _wide_data: voidPtr,
  _freeres_list: voidPtr,
  _freeres_buf: voidPtr,
  __pad5: ref.types.ulong,
  _mode: ref.types.int32,
  _unused2: ArrayType(ref.types.char, 20)
}));
var _IO_FILEPtr = (exports._IO_FILEPtr = ref.refType(_IO_FILE));
var FILE = (exports.FILE = Struct({
  _IO_FILE: _IO_FILE
}));
var FILEPtr = (exports.FILEPtr = ref.refType(FILE));
var timeval = (exports.timeval = Struct({
  tv_sec: ref.types.long,
  tv_usec: ref.types.long
}));
var timevalPtr = (exports.timevalPtr = ref.refType(timeval));
var uvc_frame_t = (exports.uvc_frame_t = Struct({
  data: voidPtr,
  data_bytes: ref.types.ulong,
  width: ref.types.uint32,
  height: ref.types.uint32,
  frame_format: ref.types.uint32,
  step: ref.types.ulong,
  sequence: ref.types.uint32,
  capture_time: timeval,
  source: uvc_device_handle_tPtr,
  library_owns_data: ref.types.uchar
}));
var uvc_frame_tPtr = (exports.uvc_frame_tPtr = ref.refType(uvc_frame_t));

exports.libuvc = new FFI.Library("libuvc", {
  uvc_init: [ref.types.int32, [voidPtr, voidPtr]],
  uvc_exit: [ref.types.void, [uvc_context_t]],
  uvc_get_device_list: [ref.types.int32, [uvc_context_tPtr, voidPtr]],
  uvc_free_device_list: [ref.types.void, [voidPtr, ref.types.uchar]],
  uvc_get_device_descriptor: [ref.types.int32, [uvc_device_t, voidPtr]],
  uvc_free_device_descriptor: [ref.types.void, [uvc_device_descriptor_tPtr]],
  uvc_get_bus_number: [ref.types.uchar, [uvc_device_tPtr]],
  uvc_get_device_address: [ref.types.uchar, [uvc_device_tPtr]],
  uvc_find_device: [
    ref.types.int32,
    [
      uvc_context_tPtr,
      voidPtr,
      ref.types.int32,
      ref.types.int32,
      ref.types.CString
    ]
  ],
  uvc_find_devices: [
    ref.types.int32,
    [
      uvc_context_tPtr,
      voidPtr,
      ref.types.int32,
      ref.types.int32,
      ref.types.CString
    ]
  ],
  uvc_open: [ref.types.int32, [uvc_device_tPtr, voidPtr]],
  uvc_close: [ref.types.void, [uvc_device_handle_t]],
  uvc_get_device: [uvc_device_tPtr, [uvc_device_handle_tPtr]],
  uvc_get_libusb_handle: [voidPtr, [uvc_device_handle_tPtr]],
  uvc_ref_device: [ref.types.void, [uvc_device_tPtr]],
  uvc_unref_device: [ref.types.void, [uvc_device_tPtr]],
  uvc_set_status_callback: [
    ref.types.void,
    [uvc_device_handle_tPtr, uvc_status_callback_t, voidPtr]
  ],
  uvc_set_button_callback: [
    ref.types.void,
    [uvc_device_handle_tPtr, uvc_button_callback_t, voidPtr]
  ],
  uvc_get_camera_terminal: [uvc_input_terminal_tPtr, [uvc_device_handle_tPtr]],
  uvc_get_input_terminals: [uvc_input_terminal_tPtr, [uvc_device_handle_tPtr]],
  uvc_get_output_terminals: [
    uvc_output_terminal_tPtr,
    [uvc_device_handle_tPtr]
  ],
  uvc_get_selector_units: [uvc_selector_unit_tPtr, [uvc_device_handle_tPtr]],
  uvc_get_processing_units: [
    uvc_processing_unit_tPtr,
    [uvc_device_handle_tPtr]
  ],
  uvc_get_extension_units: [uvc_extension_unit_tPtr, [uvc_device_handle_tPtr]],
  uvc_get_stream_ctrl_format_size: [
    ref.types.int32,
    [
      uvc_device_handle_tPtr,
      uvc_stream_ctrl_tPtr,
      ref.types.uint32,
      ref.types.int32,
      ref.types.int32,
      ref.types.int32
    ]
  ],
  uvc_get_format_descs: [uvc_format_desc_t, [uvc_device_handle_tPtr]],
  uvc_probe_stream_ctrl: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uvc_stream_ctrl_tPtr]
  ],
  uvc_start_streaming: [
    ref.types.int32,
    [
      uvc_device_handle_tPtr,
      uvc_stream_ctrl_tPtr,
      uvc_frame_callback_tPtr,
      voidPtr,
      ref.types.uchar
    ]
  ],
  uvc_start_iso_streaming: [
    ref.types.int32,
    [
      uvc_device_handle_tPtr,
      uvc_stream_ctrl_tPtr,
      uvc_frame_callback_tPtr,
      voidPtr
    ]
  ],
  uvc_stop_streaming: [ref.types.void, [uvc_device_handle_tPtr]],
  uvc_stream_open_ctrl: [
    ref.types.int32,
    [uvc_device_handle_tPtr, voidPtr, uvc_stream_ctrl_tPtr]
  ],
  uvc_stream_ctrl: [
    ref.types.int32,
    [uvc_stream_handle_t, uvc_stream_ctrl_tPtr]
  ],
  uvc_stream_start: [
    ref.types.int32,
    [uvc_stream_handle_tPtr, uvc_frame_callback_tPtr, voidPtr, ref.types.uchar]
  ],
  uvc_stream_start_iso: [
    ref.types.int32,
    [uvc_stream_handle_tPtr, uvc_frame_callback_tPtr, voidPtr]
  ],
  uvc_stream_get_frame: [
    ref.types.int32,
    [uvc_stream_handle_tPtr, voidPtr, ref.types.int32]
  ],
  uvc_stream_stop: [ref.types.int32, [uvc_stream_handle_tPtr]],
  uvc_stream_close: [ref.types.void, [uvc_stream_handle_tPtr]],
  uvc_get_ctrl_len: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.uchar, ref.types.uchar]
  ],
  uvc_get_ctrl: [
    ref.types.int32,
    [
      uvc_device_handle_tPtr,
      ref.types.uchar,
      ref.types.uchar,
      voidPtr,
      ref.types.int32,
      ref.types.uint32
    ]
  ],
  uvc_set_ctrl: [
    ref.types.int32,
    [
      uvc_device_handle_tPtr,
      ref.types.uchar,
      ref.types.uchar,
      voidPtr,
      ref.types.int32
    ]
  ],
  uvc_get_power_mode: [
    ref.types.int32,
    [uvc_device_handle_tPtr, voidPtr, ref.types.uint32]
  ],
  uvc_set_power_mode: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.uint32]
  ],
  uvc_get_scanning_mode: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uint8_tPtr, ref.types.uint32]
  ],
  uvc_set_scanning_mode: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.uchar]
  ],
  uvc_get_ae_mode: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uint8_tPtr, ref.types.uint32]
  ],
  uvc_set_ae_mode: [ref.types.int32, [uvc_device_handle_tPtr, ref.types.uchar]],
  uvc_get_ae_priority: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uint8_tPtr, ref.types.uint32]
  ],
  uvc_set_ae_priority: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.uchar]
  ],
  uvc_get_exposure_abs: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uint32_tPtr, ref.types.uint32]
  ],
  uvc_set_exposure_abs: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.uint32]
  ],
  uvc_get_exposure_rel: [
    ref.types.int32,
    [uvc_device_handle_tPtr, int8_tPtr, ref.types.uint32]
  ],
  uvc_set_exposure_rel: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.char]
  ],
  uvc_get_focus_abs: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uint16_tPtr, ref.types.uint32]
  ],
  uvc_set_focus_abs: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.ushort]
  ],
  uvc_get_focus_rel: [
    ref.types.int32,
    [uvc_device_handle_tPtr, int8_tPtr, uint8_tPtr, ref.types.uint32]
  ],
  uvc_set_focus_rel: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.char, ref.types.uchar]
  ],
  uvc_get_focus_simple_range: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uint8_tPtr, ref.types.uint32]
  ],
  uvc_set_focus_simple_range: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.uchar]
  ],
  uvc_get_focus_auto: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uint8_tPtr, ref.types.uint32]
  ],
  uvc_set_focus_auto: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.uchar]
  ],
  uvc_get_iris_abs: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uint16_tPtr, ref.types.uint32]
  ],
  uvc_set_iris_abs: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.ushort]
  ],
  uvc_get_iris_rel: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uint8_tPtr, ref.types.uint32]
  ],
  uvc_set_iris_rel: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.uchar]
  ],
  uvc_get_zoom_abs: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uint16_tPtr, ref.types.uint32]
  ],
  uvc_set_zoom_abs: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.ushort]
  ],
  uvc_get_zoom_rel: [
    ref.types.int32,
    [
      uvc_device_handle_tPtr,
      int8_tPtr,
      uint8_tPtr,
      uint8_tPtr,
      ref.types.uint32
    ]
  ],
  uvc_set_zoom_rel: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.char, ref.types.uchar, ref.types.uchar]
  ],
  uvc_get_pantilt_abs: [
    ref.types.int32,
    [uvc_device_handle_tPtr, int32_tPtr, int32_tPtr, ref.types.uint32]
  ],
  uvc_set_pantilt_abs: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.int32, ref.types.int32]
  ],
  uvc_get_pantilt_rel: [
    ref.types.int32,
    [
      uvc_device_handle_tPtr,
      int8_tPtr,
      uint8_tPtr,
      int8_tPtr,
      uint8_tPtr,
      ref.types.uint32
    ]
  ],
  uvc_set_pantilt_rel: [
    ref.types.int32,
    [
      uvc_device_handle_tPtr,
      ref.types.char,
      ref.types.uchar,
      ref.types.char,
      ref.types.uchar
    ]
  ],
  uvc_get_roll_abs: [
    ref.types.int32,
    [uvc_device_handle_tPtr, int16_tPtr, ref.types.uint32]
  ],
  uvc_set_roll_abs: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.short]
  ],
  uvc_get_roll_rel: [
    ref.types.int32,
    [uvc_device_handle_tPtr, int8_tPtr, uint8_tPtr, ref.types.uint32]
  ],
  uvc_set_roll_rel: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.char, ref.types.uchar]
  ],
  uvc_get_privacy: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uint8_tPtr, ref.types.uint32]
  ],
  uvc_set_privacy: [ref.types.int32, [uvc_device_handle_tPtr, ref.types.uchar]],
  uvc_get_digital_window: [
    ref.types.int32,
    [
      uvc_device_handle_tPtr,
      uint16_tPtr,
      uint16_tPtr,
      uint16_tPtr,
      uint16_tPtr,
      uint16_tPtr,
      uint16_tPtr,
      ref.types.uint32
    ]
  ],
  uvc_set_digital_window: [
    ref.types.int32,
    [
      uvc_device_handle_tPtr,
      ref.types.ushort,
      ref.types.ushort,
      ref.types.ushort,
      ref.types.ushort,
      ref.types.ushort,
      ref.types.ushort
    ]
  ],
  uvc_get_digital_roi: [
    ref.types.int32,
    [
      uvc_device_handle_tPtr,
      uint16_tPtr,
      uint16_tPtr,
      uint16_tPtr,
      uint16_tPtr,
      uint16_tPtr,
      ref.types.uint32
    ]
  ],
  uvc_set_digital_roi: [
    ref.types.int32,
    [
      uvc_device_handle_tPtr,
      ref.types.ushort,
      ref.types.ushort,
      ref.types.ushort,
      ref.types.ushort,
      ref.types.ushort
    ]
  ],
  uvc_get_backlight_compensation: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uint16_tPtr, ref.types.uint32]
  ],
  uvc_set_backlight_compensation: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.ushort]
  ],
  uvc_get_brightness: [
    ref.types.int32,
    [uvc_device_handle_tPtr, int16_tPtr, ref.types.uint32]
  ],
  uvc_set_brightness: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.short]
  ],
  uvc_get_contrast: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uint16_tPtr, ref.types.uint32]
  ],
  uvc_set_contrast: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.ushort]
  ],
  uvc_get_contrast_auto: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uint8_tPtr, ref.types.uint32]
  ],
  uvc_set_contrast_auto: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.uchar]
  ],
  uvc_get_gain: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uint16_tPtr, ref.types.uint32]
  ],
  uvc_set_gain: [ref.types.int32, [uvc_device_handle_tPtr, ref.types.ushort]],
  uvc_get_power_line_frequency: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uint8_tPtr, ref.types.uint32]
  ],
  uvc_set_power_line_frequency: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.uchar]
  ],
  uvc_get_hue: [
    ref.types.int32,
    [uvc_device_handle_tPtr, int16_tPtr, ref.types.uint32]
  ],
  uvc_set_hue: [ref.types.int32, [uvc_device_handle_tPtr, ref.types.short]],
  uvc_get_hue_auto: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uint8_tPtr, ref.types.uint32]
  ],
  uvc_set_hue_auto: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.uchar]
  ],
  uvc_get_saturation: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uint16_tPtr, ref.types.uint32]
  ],
  uvc_set_saturation: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.ushort]
  ],
  uvc_get_sharpness: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uint16_tPtr, ref.types.uint32]
  ],
  uvc_set_sharpness: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.ushort]
  ],
  uvc_get_gamma: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uint16_tPtr, ref.types.uint32]
  ],
  uvc_set_gamma: [ref.types.int32, [uvc_device_handle_tPtr, ref.types.ushort]],
  uvc_get_white_balance_temperature: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uint16_tPtr, ref.types.uint32]
  ],
  uvc_set_white_balance_temperature: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.ushort]
  ],
  uvc_get_white_balance_temperature_auto: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uint8_tPtr, ref.types.uint32]
  ],
  uvc_set_white_balance_temperature_auto: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.uchar]
  ],
  uvc_get_white_balance_component: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uint16_tPtr, uint16_tPtr, ref.types.uint32]
  ],
  uvc_set_white_balance_component: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.ushort, ref.types.ushort]
  ],
  uvc_get_white_balance_component_auto: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uint8_tPtr, ref.types.uint32]
  ],
  uvc_set_white_balance_component_auto: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.uchar]
  ],
  uvc_get_digital_multiplier: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uint16_tPtr, ref.types.uint32]
  ],
  uvc_set_digital_multiplier: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.ushort]
  ],
  uvc_get_digital_multiplier_limit: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uint16_tPtr, ref.types.uint32]
  ],
  uvc_set_digital_multiplier_limit: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.ushort]
  ],
  uvc_get_analog_video_standard: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uint8_tPtr, ref.types.uint32]
  ],
  uvc_set_analog_video_standard: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.uchar]
  ],
  uvc_get_analog_video_lock_status: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uint8_tPtr, ref.types.uint32]
  ],
  uvc_set_analog_video_lock_status: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.uchar]
  ],
  uvc_get_input_select: [
    ref.types.int32,
    [uvc_device_handle_tPtr, uint8_tPtr, ref.types.uint32]
  ],
  uvc_set_input_select: [
    ref.types.int32,
    [uvc_device_handle_tPtr, ref.types.uchar]
  ],
  uvc_perror: [ref.types.void, [ref.types.int32, ref.types.CString]],
  uvc_strerror: [ref.types.CString, [ref.types.int32]],
  uvc_print_diag: [ref.types.void, [uvc_device_handle_tPtr, FILEPtr]],
  uvc_print_stream_ctrl: [ref.types.void, [uvc_stream_ctrl_tPtr, FILEPtr]],
  uvc_allocate_frame: [uvc_frame_tPtr, [ref.types.ulong]],
  uvc_free_frame: [ref.types.void, [uvc_frame_tPtr]],
  uvc_duplicate_frame: [ref.types.int32, [uvc_frame_tPtr, uvc_frame_tPtr]],
  uvc_yuyv2rgb: [ref.types.int32, [uvc_frame_tPtr, uvc_frame_tPtr]],
  uvc_uyvy2rgb: [ref.types.int32, [uvc_frame_tPtr, uvc_frame_tPtr]],
  uvc_any2rgb: [ref.types.int32, [uvc_frame_tPtr, uvc_frame_tPtr]],
  uvc_yuyv2bgr: [ref.types.int32, [uvc_frame_tPtr, uvc_frame_tPtr]],
  uvc_uyvy2bgr: [ref.types.int32, [uvc_frame_tPtr, uvc_frame_tPtr]],
  uvc_any2bgr: [ref.types.int32, [uvc_frame_tPtr, uvc_frame_tPtr]],
  uvc_yuyv2y: [ref.types.int32, [uvc_frame_tPtr, uvc_frame_tPtr]],
  uvc_yuyv2uv: [ref.types.int32, [uvc_frame_tPtr, uvc_frame_tPtr]],
  uvc_mjpeg2rgb: [ref.types.int32, [uvc_frame_tPtr, uvc_frame_tPtr]]
});
