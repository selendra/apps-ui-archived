// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@polkadot/util';

import { externalLogos } from '../ui/logos';

export default {
  chains: {
    Selendra: 'selendra'
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create: (_chain: string, path: string, data: BN | number | string): string =>
    `https://explorer.selendra.org/${path}/${data.toString()}`,
  isActive: true,
  logo: externalLogos.selendra as string,
  paths: {
    address: 'accounts',
    block: 'blocks',
    extrinsic: 'extrinsics',
    validator: 'validator'
  },
  url: 'https://explorer.selendra.org/'
};
