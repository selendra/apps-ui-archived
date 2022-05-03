// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from 'i18next';
import type { EndpointOption } from './types';

import { SELENDRA_GENESIS } from '../api/constants';

/* eslint-disable sort-keys */

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   value: The actual hosted secure websocket endpoint
export function createSelendra (t: TFunction): EndpointOption {
  return {
    dnslink: 'selendra',
    genesisHash: SELENDRA_GENESIS,
    info: 'selendra',
    text: t('rpc.selendra.parity', 'Selendra', { ns: 'apps-config' }),
    providers: {
      'Selendra 1': 'wss://rpc-mainnet.selendra.org',
      'Selendra 2': 'wss://api-mainnet.selendra.org',
    },
    // teleport: [1000],
    // linked: [
    //   {
    //     info: 'indracore',
    //     paraId: 1000,
    //     text: t('rpc.selendra.indracore', 'Indracore', { ns: 'apps-config' }),
    //     providers: {
    //       Selendra: 'wss://indra-mainnet.selendra.org',
    //     },
    //     teleport: [-1]
    //   },
    // ]
  };
}
