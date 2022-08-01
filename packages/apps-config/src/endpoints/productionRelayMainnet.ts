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
// export function createSelendraTestnet (t: TFunction): EndpointOption {
//   return {
//     dnslink: 'Selendra',
//     genesisHash: SELENDRA_GENESIS,
//     info: 'Selendra',
//     text: t('rpc.selendra.selendra-chain', 'Selendra', { ns: 'apps-config' }),
//     providers: {
//       Selendra: 'wss://rpc1-testnet.selendra.org'
//     },
//     teleport: [1000],
//     linked: [
//       // (1) all system parachains (none available yet)
//       // ...
//       // (2) all common good parachains
//       {
//         info: 'Indra',
//         paraId: 1000,
//         text: t('rpc.selendra.indra', 'Indra', { ns: 'apps-config' }),
//         providers: {
//           selendra: 'wss://indra-testnet.selendra.org'
//         },
//         teleport: [-1]
//       },
//     ]
//   };
// }

export function createSelendraMainnet(t: TFunction): EndpointOption {
  return {
    dnslink: 'Selendra',
    genesisHash: SELENDRA_GENESIS,
    info: 'Selendra',
    text: t('Selendra Mainnet'),
    providers: {
      'Selendra 1': 'wss://rpc-mainnet.selendra.org',
      'Selendra 2': 'wss://rpc-mainnet2.selendra.org'
    },
    teleport: [1000],
  };
}

// export const prodSelendraTestnet: EndpointOption = {
//   dnslink: 'selendra',
//   genesisHash: SELENDRA_GENESIS,
//   info: 'selendra',
//   text: 'Selendra',
//   providers: {
//     'Selendra 1': 'wss://rpc-testnet.selendra.org',
//     'Selendra 2': 'wss://rpc-testnet2.selendra.org'
//   },
//   teleport: [1000],
// };