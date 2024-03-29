"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringify = stringify;

var _bigInt = require("./is/bigInt");

// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/** @internal */
function replacer(_, v) {
  return (0, _bigInt.isBigInt)(v) ? v.toString() : v;
}
/**
 * @name stringify
 * @summary Performs a JSON.stringify, with BigInt handling
 * @description A wrapper for JSON.stringify that handles BigInt values transparently, converting them to string. No differences from the native JSON.stringify function otherwise.
 */


function stringify(value, space) {
  return JSON.stringify(value, replacer, space);
}