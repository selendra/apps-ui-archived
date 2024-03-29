"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bnToHex = bnToHex;

var _number = require("../is/number");

var _spread = require("../object/spread");

var _u8a = require("../u8a");

var _toU8a = require("./toU8a");

// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
const ZERO_STR = '0x00';
const DEFAULT_OPTS = {
  bitLength: -1,
  isLe: false,
  isNegative: false
};
/**
 * @name bnToHex
 * @summary Creates a hex value from a BN.js bignumber object.
 * @description
 * `null` inputs returns a `0x` result, BN values return the actual value as a `0x` prefixed hex value. Anything that is not a BN object throws an error. With `bitLength` set, it fixes the number to the specified length.
 * @example
 * <BR>
 *
 * ```javascript
 * import BN from 'bn.js';
 * import { bnToHex } from '@polkadot/util';
 *
 * bnToHex(new BN(0x123456)); // => '0x123456'
 * ```
 */

function bnToHex(value) {
  let arg1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTS;
  let arg2 = arguments.length > 2 ? arguments[2] : undefined;
  return !value ? ZERO_STR : (0, _u8a.u8aToHex)((0, _toU8a.bnToU8a)(value, (0, _spread.objectSpread)( // We spread here, the default for hex values is BE (JSONRPC via substrate)
  {
    isLe: false,
    isNegative: false
  }, (0, _number.isNumber)(arg1) ? {
    bitLength: arg1,
    isLe: arg2
  } : arg1)));
}