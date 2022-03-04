// Copyright 2017-2022 @cardamom/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from 'i18next';
import type { LinkOption } from './types';

import { createSelendra } from './productionRelaySelendra';
import { createCardamom } from './productionRelayCardamom';
import { expandEndpoints } from './util';

export function createSelendraRelay (t: TFunction, firstOnly: boolean, withSort: boolean): LinkOption[] {
  return expandEndpoints(t, [createSelendra(t)], firstOnly, withSort);
}

export function createCardamomRelay (t: TFunction, firstOnly: boolean, withSort: boolean): LinkOption[] {
  return expandEndpoints(t, [createCardamom(t)], firstOnly, withSort);
}
