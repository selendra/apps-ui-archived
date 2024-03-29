"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTestChain = isTestChain;
// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
const REGEX_DEV = /(Development|Local Testnet)$/;

function isTestChain(chain) {
  if (!chain) {
    return false;
  }

  return !!REGEX_DEV.test(chain.toString());
}