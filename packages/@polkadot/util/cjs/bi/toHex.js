"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nToHex = nToHex;

var _spread = require("../object/spread");

var _u8a = require("../u8a");

var _toU8a = require("./toU8a");

// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
const ZERO_STR = '0x00';
/**
 * @name nToHex
 * @summary Creates a hex value from a bigint object.
 */

function nToHex(value, options) {
  return !value ? ZERO_STR : (0, _u8a.u8aToHex)((0, _toU8a.nToU8a)(value, (0, _spread.objectSpread)( // We spread here, the default for hex values is BE (JSONRPC via substrate)
  {
    isLe: false,
    isNegative: false
  }, options)));
}