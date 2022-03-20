'use strict';

/**
 *  internal-error controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::internal-error.internal-error');
