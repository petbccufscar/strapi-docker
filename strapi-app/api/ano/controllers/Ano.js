'use strict';

/**
 * Ano.js controller
 *
 * @description: A set of functions called "actions" for managing `Ano`.
 */

module.exports = {

  /**
   * Retrieve ano records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.ano.search(ctx.query);
    } else {
      return strapi.services.ano.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a ano record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.ano.fetch(ctx.params);
  },

  /**
   * Count ano records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.ano.count(ctx.query);
  },

  /**
   * Create a/an ano record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.ano.add(ctx.request.body);
  },

  /**
   * Update a/an ano record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.ano.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an ano record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.ano.remove(ctx.params);
  }
};
