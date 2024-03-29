"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hexFixLength = hexFixLength;

var _addPrefix = require("./addPrefix");

var _stripPrefix = require("./stripPrefix");

// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name hexFixLength
 * @summary Shifts a hex string to a specific bitLength
 * @description
 * Returns a `0x` prefixed string with the specified number of bits contained in the return value. (If bitLength is -1, length checking is not done). Values with more bits are trimmed to the specified length. Input values with less bits are returned as-is by default. When `withPadding` is set, shorter values are padded with `0`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { hexFixLength } from '@polkadot/util';
 *
 * console.log('fixed', hexFixLength('0x12', 16)); // => 0x12
 * console.log('fixed', hexFixLength('0x12', 16, true)); // => 0x0012
 * console.log('fixed', hexFixLength('0x0012', 8)); // => 0x12
 * ```
 */
function hexFixLength(value) {
  let bitLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
  let withPadding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  const strLength = Math.ceil(bitLength / 4);
  const hexLength = strLength + 2;
  return (0, _addPrefix.hexAddPrefix)(bitLength === -1 || value.length === hexLength || !withPadding && value.length < hexLength ? (0, _stripPrefix.hexStripPrefix)(value) : value.length > hexLength ? (0, _stripPrefix.hexStripPrefix)(value).slice(-1 * strLength) : `${'0'.repeat(strLength)}${(0, _stripPrefix.hexStripPrefix)(value)}`.slice(-1 * strLength));
}