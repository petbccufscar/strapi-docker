'use strict';

/**
 * Funcionarios.js controller
 *
 * @description: A set of functions called "actions" for managing `Funcionarios`.
 */

module.exports = {

  /**
   * Retrieve funcionarios records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.funcionarios.search(ctx.query);
    } else {
      return strapi.services.funcionarios.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a funcionarios record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.funcionarios.fetch(ctx.params);
  },

  /**
   * Count funcionarios records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.funcionarios.count(ctx.query);
  },

  /**
   * Create a/an funcionarios record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.funcionarios.add(ctx.request.body);
  },

  /**
   * Update a/an funcionarios record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.funcionarios.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an funcionarios record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.funcionarios.remove(ctx.params);
  }
};
