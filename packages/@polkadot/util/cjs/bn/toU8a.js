"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bnToU8a = bnToU8a;

var _number = require("../is/number");

var _spread = require("../object/spread");

var _toBn = require("./toBn");

// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
const DEFAULT_OPTS = {
  bitLength: -1,
  isLe: true,
  isNegative: false
};

function createEmpty(byteLength, options) {
  return options.bitLength === -1 ? new Uint8Array() : new Uint8Array(byteLength);
}

function createValue(valueBn, byteLength, _ref) {
  let {
    isLe,
    isNegative
  } = _ref;
  const output = new Uint8Array(byteLength);
  const bn = isNegative ? valueBn.toTwos(byteLength * 8) : valueBn;
  output.set(bn.toArray(isLe ? 'le' : 'be', byteLength), 0);
  return output;
}
/**
 * @name bnToU8a
 * @summary Creates a Uint8Array object from a BN.
 * @description
 * `null`/`undefined`/`NaN` inputs returns an empty `Uint8Array` result. `BN` input values return the actual bytes value converted to a `Uint8Array`. Optionally convert using little-endian format if `isLE` is set.
 * @example
 * <BR>
 *
 * ```javascript
 * import { bnToU8a } from '@polkadot/util';
 *
 * bnToU8a(new BN(0x1234)); // => [0x12, 0x34]
 * ```
 */


function bnToU8a(value) {
  let arg1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTS;
  let arg2 = arguments.length > 2 ? arguments[2] : undefined;
  const options = (0, _spread.objectSpread)({
    bitLength: -1,
    isLe: true,
    isNegative: false
  }, (0, _number.isNumber)(arg1) ? {
    bitLength: arg1,
    isLe: arg2
  } : arg1);
  const valueBn = (0, _toBn.bnToBn)(value);
  const byteLength = options.bitLength === -1 ? Math.ceil(valueBn.bitLength() / 8) : Math.ceil((options.bitLength || 0) / 8);
  return value ? createValue(valueBn, byteLength, options) : createEmpty(byteLength, options);
}