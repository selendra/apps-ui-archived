"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bnToBn = bnToBn;

var _toBn = require("../hex/toBn");

var _bigInt = require("../is/bigInt");

var _hex = require("../is/hex");

var _toBigInt = require("../is/toBigInt");

var _toBn2 = require("../is/toBn");

var _bn = require("./bn");

// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name bnToBn
 * @summary Creates a BN value from a BN, bigint, string (base 10 or hex) or number input.
 * @description
 * `null` inputs returns a `0x0` result, BN values returns the value, numbers returns a BN representation.
 * @example
 * <BR>
 *
 * ```javascript
 * import BN from 'bn.js';
 * import { bnToBn } from '@polkadot/util';
 *
 * bnToBn(0x1234); // => BN(0x1234)
 * bnToBn(new BN(0x1234)); // => BN(0x1234)
 * ```
 */
function bnToBn(value) {
  return _bn.BN.isBN(value) ? value : !value ? new _bn.BN(0) : (0, _hex.isHex)(value) ? (0, _toBn.hexToBn)(value.toString()) : (0, _bigInt.isBigInt)(value) ? new _bn.BN(value.toString()) : (0, _toBn2.isToBn)(value) ? value.toBn() : (0, _toBigInt.isToBigInt)(value) ? new _bn.BN(value.toBigInt().toString()) : new _bn.BN(value);
}