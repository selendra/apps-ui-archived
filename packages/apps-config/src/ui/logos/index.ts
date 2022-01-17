// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint sort-keys: ["error", "asc", { caseSensitive: false }] */

// The mapping here is done on the actual chain name (system.chain RPC) or
// the actual RPC node it is corrected to (system.name RPC)

// anything for a specific chain, most would probably fit into the node category (but allow for chain-specific)
// alphabetical
import { sanitize } from '../util';
import chainKusama from './chains/kusama-128.gif';
import chainRococo from './chains/rococo.svg';
import Selendra from './chains/selendra.png';
import extensionPolkadotJs from './extensions/polkadot-js.svg';
import externalCommonwealth from './external/commonwealth.png';
import externalDotreasury from './external/dotreasury.svg';
import externalDotScanner from './external/dotscanner.png';
import externalPolkascan from './external/polkascan.png';
import externalPolkassembly from './external/polkassembly.png';
import externalPolkastats from './external/polkastats.png';
import externalStatescan from './external/statescan.svg';
import externalSubId from './external/subid.svg';
import externalSubscan from './external/subscan.svg';
import externalSubsquare from './external/subsquare.svg';
import nodePolkadot from './nodes/polkadot-circle.svg';
import nodePolkadotJs from './nodes/polkadot-js.svg';
import nodeStatemine from './nodes/statemine.svg';
import emptyLogo from './empty.svg';

// last-resort fallback, just something empty

// Alphabetical overrides based on the actual matched chain name
// NOTE: This is as retrieved via system.chain RPC
export const chainLogos = Object.entries({
  Kusama: chainKusama, // new name after CC3
  'Kusama CC1': chainKusama,
  'Kusama CC2': chainKusama,
  'Kusama CC3': chainKusama,
  Rococo: chainRococo,
  Selendra: Selendra,
  'selendra dev': Selendra,
  'selendra': Selendra,
  'selendra-chain': Selendra,
  'selendra Testnet': Selendra,
  'Statemint Test': nodeStatemine,
  Indra: Selendra,
}).reduce<Record<string, unknown>>((logos, [chain, logo]) => ({
  ...logos,
  [sanitize(chain)]: logo
}), {});

// Alphabetical overrides based on the actual software node type
// NOTE: This is as retrieved via system.name RPC
export const nodeLogos = Object.entries({
  'polkadot-js': nodePolkadotJs,
  Selendra: Selendra,
  'selendra dev': Selendra,
  'selendra': Selendra,
  'selendra-chain': Selendra,
  'selendra Testnet': Selendra,
  Indra: Selendra
}).reduce<Record<string, unknown>>((logos, [node, logo]) => ({
  ...logos,
  [sanitize(node)]: logo
}), {});

// Alphabetical overrides based on the actual specName
export const specLogos = Object.entries({
  selendra: Selendra,
  statemine: nodeStatemine,
  statemint: nodeStatemine,
  indra: Selendra,
  'indra-tesnet': Selendra,
}).reduce<Record<string, unknown>>((logos, [spec, logo]) => ({
  ...logos,
  [sanitize(spec)]: logo
}), {});

// Alphabetical overrides when we pass an explicit logo name
// NOTE: Matches with what is defined as "info" in settings/endpoints.ts
// (Generally would be the 'network' key in the known ss58 as per
// https://github.com/polkadot-js/common/blob/master/packages/networks/src/index.ts)
export const namedLogos: Record<string, unknown> = {
  polkadot: nodePolkadot,
  Selendra: Selendra,
  Indra: Selendra,
  'selendra dev': Selendra,
  'selendra': Selendra,
  'selendra-chain': Selendra,
  'selendra Testnet': Selendra,
  statemint: nodeStatemine,
};

// extension logos
export const extensionLogos: Record<string, unknown> = {
  'polkadot-js': extensionPolkadotJs
};

// external logos, i.e. for explorers
export const externalLogos: Record<string, unknown> = {
  commonwealth: externalCommonwealth,
  dotreasury: externalDotreasury,
  dotscanner: externalDotScanner,
  polkascan: externalPolkascan,
  polkassembly: externalPolkassembly,
  polkastats: externalPolkastats,
  statescan: externalStatescan,
  subid: externalSubId,
  subscan: externalSubscan,
  subsquare: externalSubsquare
};

// empty logos
export const emptyLogos: Record<string, unknown> = {
  empty: emptyLogo
};

// preload all
[chainLogos, extensionLogos, externalLogos, namedLogos, nodeLogos, emptyLogos].forEach((imageSet): void => {
  Object.values(imageSet).forEach((src): void => {
    new Image().src = src as string;
  });
});
