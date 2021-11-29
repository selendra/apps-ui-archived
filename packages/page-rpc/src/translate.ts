// Copyright 2017-2021 @polkadot/app-rpc authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { UseTranslationResponse } from 'react-i18next';

import { useTranslation as useTranslationBase } from 'react-i18next';

export function useTranslation (): UseTranslationResponse<'app-rpc', undefined> {
  return useTranslationBase('app-rpc');
}
