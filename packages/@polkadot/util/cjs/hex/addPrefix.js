"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hexAddPrefix = hexAddPrefix;

var _hasPrefix = require("./hasPrefix");

// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name hexAddPrefix
 * @summary Adds the `0x` prefix to string values.
 * @description
 * Returns a `0x` prefixed string from the input value. If the input is already prefixed, it is returned unchanged.
 * @example
 * <BR>
 *
 * ```javascript
 * import { hexAddPrefix } from '@polkadot/util';
 *
 * console.log('With prefix', hexAddPrefix('0a0b12')); // => 0x0a0b12
 * ```
 */
function hexAddPrefix(value) {
  return value && (0, _hasPrefix.hexHasPrefix)(value) ? value : `0x${value && value.length % 2 === 1 ? '0' : ''}${value || ''}`;
}