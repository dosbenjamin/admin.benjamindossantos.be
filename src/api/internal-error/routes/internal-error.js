'use strict';

/**
 * internal-error router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::internal-error.internal-error');
