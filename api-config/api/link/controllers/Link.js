'use strict';

/**
 * Link.js controller
 *
 * @description: A set of functions called "actions" for managing `Link`.
 */

module.exports = {

  /**
   * Retrieve link records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.link.search(ctx.query);
    } else {
      return strapi.services.link.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a link record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.link.fetch(ctx.params);
  },

  /**
   * Count link records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.link.count(ctx.query);
  },

  /**
   * Create a/an link record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.link.add(ctx.request.body);
  },

  /**
   * Update a/an link record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.link.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an link record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.link.remove(ctx.params);
  }
};
