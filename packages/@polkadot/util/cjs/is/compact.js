"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isCompact = isCompact;

var _helpers = require("./helpers");

// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
const checker = (0, _helpers.isOnObject)('toBigInt', 'toBn', 'toNumber', 'unwrap');
/**
 * @name isCompact
 * @summary Tests for SCALE-Compact-like object instance.
 */

function isCompact(value) {
  return checker(value);
}