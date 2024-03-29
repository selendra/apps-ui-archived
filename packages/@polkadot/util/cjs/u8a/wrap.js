"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.U8A_WRAP_PREFIX = exports.U8A_WRAP_POSTFIX = exports.U8A_WRAP_ETHEREUM = void 0;
exports.u8aIsWrapped = u8aIsWrapped;
exports.u8aUnwrapBytes = u8aUnwrapBytes;
exports.u8aWrapBytes = u8aWrapBytes;

var _concat = require("./concat");

var _eq = require("./eq");

var _toU8a = require("./toU8a");

// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
// Originally from https://github.com/polkadot-js/extension/pull/743
const U8A_WRAP_ETHEREUM = (0, _toU8a.u8aToU8a)('\x19Ethereum Signed Message:\n');
exports.U8A_WRAP_ETHEREUM = U8A_WRAP_ETHEREUM;
const U8A_WRAP_PREFIX = (0, _toU8a.u8aToU8a)('<Bytes>');
exports.U8A_WRAP_PREFIX = U8A_WRAP_PREFIX;
const U8A_WRAP_POSTFIX = (0, _toU8a.u8aToU8a)('</Bytes>');
exports.U8A_WRAP_POSTFIX = U8A_WRAP_POSTFIX;
const WRAP_LEN = U8A_WRAP_PREFIX.length + U8A_WRAP_POSTFIX.length;

function u8aIsWrapped(u8a, withEthereum) {
  return u8a.length >= WRAP_LEN && (0, _eq.u8aEq)(u8a.subarray(0, U8A_WRAP_PREFIX.length), U8A_WRAP_PREFIX) && (0, _eq.u8aEq)(u8a.slice(-U8A_WRAP_POSTFIX.length), U8A_WRAP_POSTFIX) || withEthereum && u8a.length >= U8A_WRAP_ETHEREUM.length && (0, _eq.u8aEq)(u8a.subarray(0, U8A_WRAP_ETHEREUM.length), U8A_WRAP_ETHEREUM);
}

function u8aUnwrapBytes(bytes) {
  const u8a = (0, _toU8a.u8aToU8a)(bytes); // we don't want to unwrap Ethereum-style wraps

  return u8aIsWrapped(u8a, false) ? u8a.subarray(U8A_WRAP_PREFIX.length, u8a.length - U8A_WRAP_POSTFIX.length) : u8a;
}

function u8aWrapBytes(bytes) {
  const u8a = (0, _toU8a.u8aToU8a)(bytes); // if Ethereum-wrapping, we don't add our wrapping bytes

  return u8aIsWrapped(u8a, true) ? u8a : (0, _concat.u8aConcat)(U8A_WRAP_PREFIX, u8a, U8A_WRAP_POSTFIX);
}