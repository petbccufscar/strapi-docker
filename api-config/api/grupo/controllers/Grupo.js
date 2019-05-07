'use strict';

/**
 * Grupo.js controller
 *
 * @description: A set of functions called "actions" for managing `Grupo`.
 */

module.exports = {

  /**
   * Retrieve grupo records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.grupo.search(ctx.query);
    } else {
      return strapi.services.grupo.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a grupo record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.grupo.fetch(ctx.params);
  },

  /**
   * Count grupo records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.grupo.count(ctx.query);
  },

  /**
   * Create a/an grupo record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.grupo.add(ctx.request.body);
  },

  /**
   * Update a/an grupo record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.grupo.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an grupo record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.grupo.remove(ctx.params);
  }
};
