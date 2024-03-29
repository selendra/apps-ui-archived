"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objectCopy = objectCopy;

var _spread = require("./spread");

// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name objectCopy
 * @summary Creates a shallow clone of the input object
 */
function objectCopy(source) {
  return (0, _spread.objectSpread)({}, source);
}