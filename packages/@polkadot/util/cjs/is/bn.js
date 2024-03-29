"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBn = isBn;

var _bn = require("../bn/bn");

// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name isBn
 * @summary Tests for a `BN` object instance.
 * @description
 * Checks to see if the input object is an instance of `BN` (bn.js).
 * @example
 * <BR>
 *
 * ```javascript
 * import BN from 'bn.js';
 * import { isBn } from '@polkadot/util';
 *
 * console.log('isBn', isBn(new BN(1))); // => true
 * ```
 */
function isBn(value) {
  return _bn.BN.isBN(value);
}