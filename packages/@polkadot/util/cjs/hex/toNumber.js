"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hexToNumber = hexToNumber;

var _toBn = require("./toBn");

// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name hexToNumber
 * @summary Creates a Number value from a Buffer object.
 * @description
 * `null` inputs returns an NaN result, `hex` values return the actual value as a `Number`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { hexToNumber } from '@polkadot/util';
 *
 * hexToNumber('0x1234'); // => 0x1234
 * ```
 */
function hexToNumber(value) {
  return value ? (0, _toBn.hexToBn)(value).toNumber() : NaN;
}