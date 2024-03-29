"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.u8aConcat = u8aConcat;

var _toU8a = require("./toU8a");

// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name u8aConcat
 * @summary Creates a concatenated Uint8Array from the inputs.
 * @description
 * Concatenates the input arrays into a single `UInt8Array`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { { u8aConcat } from '@polkadot/util';
 *
 * u8aConcat(
 *   new Uint8Array([1, 2, 3]),
 *   new Uint8Array([4, 5, 6])
 * ); // [1, 2, 3, 4, 5, 6]
 * ```
 */
function u8aConcat() {
  const u8as = new Array(arguments.length);

  for (let i = 0; i < arguments.length; i++) {
    u8as[i] = (0, _toU8a.u8aToU8a)(i < 0 || arguments.length <= i ? undefined : arguments[i]);
  }

  return Uint8Array.from(Buffer.concat(u8as));
}