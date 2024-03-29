"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objectSpread = objectSpread;

var _keys = require("./keys");

// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name objectSpread
 * @summary Concats all sources into the destination
 */
function objectSpread(dest) {
  for (let i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i++) {
    const src = i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];

    if (src) {
      const keys = (0, _keys.objectKeys)(src);

      for (let j = 0; j < keys.length; j++) {
        const key = keys[j];
        dest[key] = src[key];
      }
    }
  }

  return dest;
}