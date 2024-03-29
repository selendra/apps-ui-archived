"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lazyMethod = lazyMethod;
exports.lazyMethods = lazyMethods;

var _undefined = require("./is/undefined");

// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0
function lazyMethod(result, item, creator, getName) {
  const name = getName ? getName(item) : item.toString();
  let value;
  Object.defineProperty(result, name, {
    // This allows for re-configuration with the embedded defineProperty below
    // and ensures that on tested browsers and Node, it _will_ be redefined
    // and thus short-circuited for future access
    configurable: true,
    enumerable: true,
    // Use a function here, we don't want to capture the outer this, i.e.
    // don't use arrow functions in this context since we have a this inside
    get: function () {
      // This check should _always_ be false and unneeded, since we override
      // with a value below ... however we ensure we are quire vigilant against
      // all environment failures, so we are rather be safe than sorry
      if ((0, _undefined.isUndefined)(value)) {
        value = creator(item);

        try {
          // re-define the property as a value, next time around this
          // getter will only return the computed value
          Object.defineProperty(this, name, {
            value
          });
        } catch {// ignore any errors, since this _should_ not happen due to
          // the "configurable" property above. But if it ever does
          // from here-on we will be the cached value the next time
          // around (with a very slight dip in performance)
        }
      }

      return value;
    }
  });
}

function lazyMethods(result, items, creator, getName) {
  for (let i = 0; i < items.length; i++) {
    lazyMethod(result, items[i], creator, getName);
  }

  return result;
}