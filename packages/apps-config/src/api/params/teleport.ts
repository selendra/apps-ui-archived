// Copyright 2017-2022 @polkadot/app-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiPromise } from '@polkadot/api';

import { SELENRATESTNET_GENENSIS } from '../constants';

// 4 * BaseXcmWeight on Kusama
const KUSAMA_WEIGHT = 4 * 1_000_000_000;

const DEFAULT_WEIGHT = KUSAMA_WEIGHT;

const KNOWN_WEIGHTS: Record<string, number> = {
  [SELENRATESTNET_GENENSIS]: KUSAMA_WEIGHT
};

export function getTeleportWeight (api: ApiPromise): number {
  return KNOWN_WEIGHTS[api.genesisHash.toHex()] || DEFAULT_WEIGHT;
}
