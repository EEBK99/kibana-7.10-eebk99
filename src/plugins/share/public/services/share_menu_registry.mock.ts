/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import {
  ShareMenuRegistry,
  ShareMenuRegistrySetup,
  ShareMenuRegistryStart,
} from './share_menu_registry';
import { ShareMenuItem, ShareContext } from '../types';

const createSetupMock = (): jest.Mocked<ShareMenuRegistrySetup> => {
  const setup = {
    register: jest.fn(),
  };
  return setup;
};

const createStartMock = (): jest.Mocked<ShareMenuRegistryStart> => {
  const start = {
    getShareMenuItems: jest.fn((props: ShareContext) => [] as ShareMenuItem[]),
  };
  return start;
};

const createMock = (): jest.Mocked<PublicMethodsOf<ShareMenuRegistry>> => {
  const service = {
    setup: jest.fn(),
    start: jest.fn(),
  };
  service.setup.mockImplementation(createSetupMock);
  service.start.mockImplementation(createStartMock);
  return service;
};

export const shareMenuRegistryMock = {
  createSetup: createSetupMock,
  createStart: createStartMock,
  create: createMock,
};
