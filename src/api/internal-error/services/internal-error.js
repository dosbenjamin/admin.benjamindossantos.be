'use strict';

/**
 * internal-error service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::internal-error.internal-error');
