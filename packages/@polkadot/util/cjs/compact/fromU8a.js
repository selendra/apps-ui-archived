"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compactFromU8a = compactFromU8a;

var _bn = require("../bn");

var _u8a = require("../u8a");

// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name compactFromU8a
 * @description Retrievs the offset and encoded length from a compact-prefixed value
 * @example
 * <BR>
 *
 * ```javascript
 * import { compactFromU8a } from '@polkadot/util';
 *
 * const [offset, length] = compactFromU8a(new Uint8Array([254, 255, 3, 0]));
 *
 * console.log('value offset=', offset, 'length=', length); // 4, 0xffff
 * ```
 */
function compactFromU8a(input) {
  const u8a = (0, _u8a.u8aToU8a)(input);
  const flag = u8a[0] & 0b11;

  if (flag === 0b00) {
    return [1, new _bn.BN(u8a[0]).ishrn(2)];
  } else if (flag === 0b01) {
    return [2, (0, _u8a.u8aToBn)(u8a.subarray(0, 2), true).ishrn(2)];
  } else if (flag === 0b10) {
    return [4, (0, _u8a.u8aToBn)(u8a.subarray(0, 4), true).ishrn(2)];
  }

  const offset = 1 + new _bn.BN(u8a[0]).ishrn(2) // clear flag
  .iadd(_bn.BN_FOUR) // add 4 for base length
  .toNumber();
  return [offset, (0, _u8a.u8aToBn)(u8a.subarray(1, offset), true)];
}