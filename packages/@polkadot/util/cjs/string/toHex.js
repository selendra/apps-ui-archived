"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringToHex = stringToHex;

var _toHex = require("../u8a/toHex");

var _toU8a = require("./toU8a");

// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name stringToHex
 * @summary Creates a hex string from a utf-8 string
 * @description
 * String input values return the actual encoded hex value.
 * @example
 * <BR>
 *
 * ```javascript
 * import { stringToHex } from '@polkadot/util';
 *
 * stringToU8a('hello'); // 0x68656c6c6f
 * ```
 */
function stringToHex(value) {
  return (0, _toHex.u8aToHex)((0, _toU8a.stringToU8a)(value));
}