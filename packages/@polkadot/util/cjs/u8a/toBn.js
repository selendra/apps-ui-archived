"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.u8aToBn = u8aToBn;

var _toBn = require("../hex/toBn");

var _toHex = require("./toHex");

// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
const DEFAULT_OPTS = {
  isLe: true,
  isNegative: false
};
/**
 * @name u8aToBn
 * @summary Creates a BN from a Uint8Array object.
 * @description
 * `UInt8Array` input values return the actual BN. `null` or `undefined` values returns an `0x0` value.
 * @param value The value to convert
 * @param options Options to pass while converting
 * @param options.isLe Convert using Little Endian
 * @param options.isNegative Convert using two's complement
 * @example
 * <BR>
 *
 * ```javascript
 * import { u8aToBn } from '@polkadot/util';
 *
 * u8aToHex(new Uint8Array([0x68, 0x65, 0x6c, 0x6c, 0xf])); // 0x68656c0f
 * ```
 */

function u8aToBn(value) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTS;
  return (0, _toBn.hexToBn)((0, _toHex.u8aToHex)(value), options);
}