// Copyright 2017-2022 @cardamom/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from 'i18next';
import type { EndpointOption } from './types';

import { CARDAMOM_GENESIS } from '../api/constants';

/* eslint-disable sort-keys */

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Cardamom) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @cardamom/networks)
//   text: The text to display on the dropdown
//   value: The actual hosted secure websocket endpoint
export function createCardamom (t: TFunction): EndpointOption {
  return {
    dnslink: 'cardamom',
    genesisHash: CARDAMOM_GENESIS,
    info: 'cardamom',
    text: t('rpc.cardamom.selendra', 'Cardamom', { ns: 'apps-config' }),
    providers: {
      Selendra: 'wss://rpc1-testnet.selendra.org',
      // Local: 'ws://127.0.0.1:9944'
    },
    teleport: [1000, 1001],
    linked: [
      {
        info: 'indranet',
        paraId: 1000,
        text: t('rpc.cardamom.indranet', 'Indranet', { ns: 'apps-config' }),
        providers: {
          Selendra: 'wss://indra-testnet.selendra.org',
          // Local: 'ws://127.0.0.1:8844'
        },
        teleport: [-1]
      },
      // {
      //   info: 'indradent',
      //   paraId: 1001,
      //   text: t('rpc.cardamom.indradent', 'Indradent', { ns: 'apps-config' }),
      //   providers: {
      //     Selendra: 'wss://indradent.selendra.org',
      //   },
      //   teleport: [-1]
      // },
    ]
  };
}
