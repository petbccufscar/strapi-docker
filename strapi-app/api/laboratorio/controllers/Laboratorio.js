'use strict';

/**
 * Laboratorio.js controller
 *
 * @description: A set of functions called "actions" for managing `Laboratorio`.
 */

module.exports = {

  /**
   * Retrieve laboratorio records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.laboratorio.search(ctx.query);
    } else {
      return strapi.services.laboratorio.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a laboratorio record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.laboratorio.fetch(ctx.params);
  },

  /**
   * Count laboratorio records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.laboratorio.count(ctx.query);
  },

  /**
   * Create a/an laboratorio record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.laboratorio.add(ctx.request.body);
  },

  /**
   * Update a/an laboratorio record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.laboratorio.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an laboratorio record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.laboratorio.remove(ctx.params);
  }
};
