// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint sort-keys: ["error", "asc", { caseSensitive: false }] */

import { sanitize } from './util';

// The mapping here is done on the actual chain name (system.chain RPC) or
// the actual RPC node it is corrected to (system.name RPC)

// defaults
const emptyColor = '#99999';

const chainSelendra = '#03A9F4';

// based on the spec name
const specShell = '#2e86ab'; // '#0596FC';
const specStatemine = '#113911';
const specStatemint = '#86e62a';
const specWestmint = '#77bb77';

export { emptyColor };

// Alphabetical overrides based on the actual matched chain name
// NOTE: This is as retrieved via the system.chain RPC
export const chainColors: Record<string, string> = Object.entries({
  Selendra: chainSelendra,
  'selendra dev': chainSelendra,
  'selendra': chainSelendra,
  'selendra-Chain': chainSelendra,
  'selendra Testnet': chainSelendra,
  Indra: chainSelendra,
  'indra-testnet': chainSelendra,
  "indra-parachain": chainSelendra,
}).reduce<Record<string, string>>((colors, [chain, color]) => ({
  ...colors,
  [sanitize(chain)]: color
}), {});

// Alphabetical overrides based on the actual software node type
// NOTE: This is as retrieved via the system.name RPC
export const nodeColors = Object.entries({
  Selendra: chainSelendra,
  'selendra dev': chainSelendra,
  'selendra': chainSelendra,
  'selendra-Chain': chainSelendra,
  'selendra Testnet': chainSelendra,
  'indra-testnet': chainSelendra,
  "indra-parachain": chainSelendra,
}).reduce<Record<string, string>>((colors, [node, color]) => ({
  ...colors,
  [sanitize(node)]: color
}), {});

// Alphabetical overrides based on the actual software node type
// NOTE: This is as retrieved via the system.name RPC
export const specColors = Object.entries({
  shell: specShell,
  statemine: specStatemine,
  statemint: specStatemint,
  westmint: specWestmint,
  selendra: chainSelendra,
  indra: chainSelendra,
}).reduce<Record<string, string>>((colors, [spec, color]) => ({
  ...colors,
  [sanitize(spec)]: color
}), {});
