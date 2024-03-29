"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BN_ZERO = exports.BN_TWO = exports.BN_THREE = exports.BN_THOUSAND = exports.BN_TEN = exports.BN_SIX = exports.BN_SEVEN = exports.BN_QUINTILL = exports.BN_ONE = exports.BN_NINE = exports.BN_MILLION = exports.BN_MAX_INTEGER = exports.BN_HUNDRED = exports.BN_FOUR = exports.BN_FIVE = exports.BN_EIGHT = exports.BN_BILLION = void 0;

var _bn = require("./bn");

// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name BN_ZERO
 * @summary BN constant for 0.
 */
const BN_ZERO = new _bn.BN(0);
/**
 * @name BN_ONE
 * @summary BN constant for 1.
 */

exports.BN_ZERO = BN_ZERO;
const BN_ONE = new _bn.BN(1);
/**
 * @name BN_TWO
 * @summary BN constant for 2.
 */

exports.BN_ONE = BN_ONE;
const BN_TWO = new _bn.BN(2);
/**
 * @name BN_THREE
 * @summary BN constant for 3.
 */

exports.BN_TWO = BN_TWO;
const BN_THREE = new _bn.BN(3);
/**
 * @name BN_FOUR
 * @summary BN constant for 4.
 */

exports.BN_THREE = BN_THREE;
const BN_FOUR = new _bn.BN(4);
/**
 * @name BN_FIVE
 * @summary BN constant for 5.
 */

exports.BN_FOUR = BN_FOUR;
const BN_FIVE = new _bn.BN(5);
/**
 * @name BN_SIX
 * @summary BN constant for 6.
 */

exports.BN_FIVE = BN_FIVE;
const BN_SIX = new _bn.BN(6);
/**
 * @name BN_SEVEN
 * @summary BN constant for 7.
 */

exports.BN_SIX = BN_SIX;
const BN_SEVEN = new _bn.BN(7);
/**
 * @name BN_EIGHT
 * @summary BN constant for 8.
 */

exports.BN_SEVEN = BN_SEVEN;
const BN_EIGHT = new _bn.BN(8);
/**
 * @name BN_NINE
 * @summary BN constant for 9.
 */

exports.BN_EIGHT = BN_EIGHT;
const BN_NINE = new _bn.BN(9);
/**
 * @name BN_TEN
 * @summary BN constant for 10.
 */

exports.BN_NINE = BN_NINE;
const BN_TEN = new _bn.BN(10);
/**
 * @name BN_HUNDRED
 * @summary BN constant for 100.
 */

exports.BN_TEN = BN_TEN;
const BN_HUNDRED = new _bn.BN(100);
/**
 * @name BN_THOUSAND
 * @summary BN constant for 1,000.
 */

exports.BN_HUNDRED = BN_HUNDRED;
const BN_THOUSAND = new _bn.BN(1000);
/**
 * @name BN_MILLION
 * @summary BN constant for 1,000,000.
 */

exports.BN_THOUSAND = BN_THOUSAND;
const BN_MILLION = new _bn.BN(1000000);
/**
 * @name BN_BILLION
 * @summary BN constant for 1,000,000,000.
 */

exports.BN_MILLION = BN_MILLION;
const BN_BILLION = new _bn.BN(1000000000);
/**
 * @name BN_QUINTILL
 * @summary BN constant for 1,000,000,000,000,000,000.
 */

exports.BN_BILLION = BN_BILLION;
const BN_QUINTILL = BN_BILLION.mul(BN_BILLION);
/**
 * @name BN_MAX_INTEGER
 * @summary BN constant for MAX_SAFE_INTEGER
 */

exports.BN_QUINTILL = BN_QUINTILL;
const BN_MAX_INTEGER = new _bn.BN(Number.MAX_SAFE_INTEGER);
exports.BN_MAX_INTEGER = BN_MAX_INTEGER;