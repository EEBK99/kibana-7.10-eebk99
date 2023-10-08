/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { useMlKibana } from './kibana_context';

export const useNotifications = () => {
  return useMlKibana().services.notifications;
};
