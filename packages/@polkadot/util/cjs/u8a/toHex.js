"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.u8aToHex = u8aToHex;

var _alphabet = require("../hex/alphabet");

// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/** @internal */
function hex(value) {
  const mod = value.length % 2;
  const length = value.length - mod;
  const dv = new DataView(value.buffer, value.byteOffset);
  let result = '';

  for (let i = 0; i < length; i += 2) {
    result += _alphabet.U16_TO_HEX[dv.getUint16(i)];
  }

  if (mod) {
    result += _alphabet.U8_TO_HEX[dv.getUint8(length)];
  }

  return result;
}
/**
 * @name u8aToHex
 * @summary Creates a hex string from a Uint8Array object.
 * @description
 * `UInt8Array` input values return the actual hex string. `null` or `undefined` values returns an `0x` string.
 * @example
 * <BR>
 *
 * ```javascript
 * import { u8aToHex } from '@polkadot/util';
 *
 * u8aToHex(new Uint8Array([0x68, 0x65, 0x6c, 0x6c, 0xf])); // 0x68656c0f
 * ```
 */


function u8aToHex(value) {
  let bitLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
  let isPrefixed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  const length = Math.ceil(bitLength / 8);
  return `${isPrefixed ? '0x' : ''}${!value || !value.length ? '' : length > 0 && value.length > length ? `${hex(value.subarray(0, length / 2))}…${hex(value.subarray(value.length - length / 2))}` : hex(value)}`;
}