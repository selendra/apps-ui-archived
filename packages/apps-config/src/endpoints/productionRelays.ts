// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from 'i18next';
import type { LinkOption } from './types';

import { createSelendraMainnet } from './productionRelayMainnet';
import { expandEndpoints } from './util';

export function createSelendraTestnetRelay(t: TFunction, firstOnly: boolean, withSort: boolean): LinkOption[] {
  return expandEndpoints(t, [createSelendraMainnet(t)], firstOnly, withSort);
}

