'use strict';

/**
 * Banner.js controller
 *
 * @description: A set of functions called "actions" for managing `Banner`.
 */

module.exports = {

  /**
   * Retrieve banner records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.banner.search(ctx.query);
    } else {
      return strapi.services.banner.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a banner record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.banner.fetch(ctx.params);
  },

  /**
   * Count banner records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.banner.count(ctx.query);
  },

  /**
   * Create a/an banner record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.banner.add(ctx.request.body);
  },

  /**
   * Update a/an banner record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.banner.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an banner record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.banner.remove(ctx.params);
  }
};
