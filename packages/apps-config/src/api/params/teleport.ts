// Copyright 2017-2022 @polkadot/app-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiPromise } from '@polkadot/api';

import { SELENRATESTNET_GENENSIS } from '../constants';

// 4 * BaseXcmWeight on Kusama
const SELENDRA_WEIGHT = 4 * 1_000_000_000;

const DEFAULT_WEIGHT = SELENDRA_WEIGHT;

const KNOWN_WEIGHTS: Record<string, number> = {
  [SELENRATESTNET_GENENSIS]: SELENDRA_WEIGHT
};

export function getTeleportWeight (api: ApiPromise): number {
  return KNOWN_WEIGHTS[api.genesisHash.toHex()] || DEFAULT_WEIGHT;
}
