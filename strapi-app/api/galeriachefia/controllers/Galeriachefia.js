'use strict';

/**
 * Galeriachefia.js controller
 *
 * @description: A set of functions called "actions" for managing `Galeriachefia`.
 */

module.exports = {

  /**
   * Retrieve galeriachefia records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.galeriachefia.search(ctx.query);
    } else {
      return strapi.services.galeriachefia.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a galeriachefia record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.galeriachefia.fetch(ctx.params);
  },

  /**
   * Count galeriachefia records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.galeriachefia.count(ctx.query);
  },

  /**
   * Create a/an galeriachefia record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.galeriachefia.add(ctx.request.body);
  },

  /**
   * Update a/an galeriachefia record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.galeriachefia.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an galeriachefia record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.galeriachefia.remove(ctx.params);
  }
};
