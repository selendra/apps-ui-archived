// Copyright 2017-2022 @polkadot/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { selectableNetworks } from '@polkadot/networks';
import { assert, BN } from '@polkadot/util';

function getGenesis (name: string): string {
  const network = selectableNetworks.find(({ network }) => network === name);

  assert(network && network.genesisHash[0], `Unable to find genesisHash for ${name}`);

  return network.genesisHash[0];
}

export const KULUPU_GENESIS = getGenesis('kulupu');

export const KUSAMA_GENESIS = getGenesis('kusama');

export const POLKADOT_GENESIS = getGenesis('polkadot');
export const POLKADOT_DENOM_BLOCK = new BN(1248328);

export const ROCOCO_GENESIS = '0xaaf2cd1b74b5f726895921259421b534124726263982522174147046b8827897';

export const WESTEND_GENESIS = '0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e';

export const NEATCOIN_GENESIS = '0xfbb541421d30423c9a753ffa844b64fd44d823f513bf49e3b73b3a656309a595';

export const DOCK_GENESIS = '0x6bfe24dca2a3be10f22212678ac13a6446ec764103c0f3471c71609eac384aae';

export const DOCK_POS_TESTNET_GENESIS = '0x59d93e2ce42abb8aa52ca9a9e820233667104751f8f2980578a47a26a7235027';

export const NFTMART_GENESIS = '0xfcf9074303d8f319ad1bf0195b145871977e7c375883b834247cb01ff22f51f9';

export const SELENDRA_GENESIS = "0x8dbbe8a37d4c62d14835ba0f7e3baf70cf4b93a3e98c53d69544a7b9ea42d0df"

export const CARDAMOM_GENESIS = "0x3d7efe9e36b20531f2a735feac13f3cad96798b2d9036a6950dac8076c19c545"
