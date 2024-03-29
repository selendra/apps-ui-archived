"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAscii = isAscii;

var _toU8a = require("../u8a/toU8a");

var _hex = require("./hex");

var _string = require("./string");

// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
const FORMAT = [9, 10, 13];
/** @internal */

function isAsciiByte(b) {
  return b < 127 && (b >= 32 || FORMAT.includes(b));
}

function isAsciiChar(s) {
  return isAsciiByte(s.charCodeAt(0));
}
/**
 * @name isAscii
 * @summary Tests if the input is printable ASCII
 * @description
 * Checks to see if the input string or Uint8Array is printable ASCII, 32-127 + formatters
 */


function isAscii(value) {
  const isStringIn = (0, _string.isString)(value);

  if (value) {
    return isStringIn && !(0, _hex.isHex)(value) ? value.toString().split('').every(isAsciiChar) : (0, _toU8a.u8aToU8a)(value).every(isAsciiByte);
  }

  return isStringIn;
}