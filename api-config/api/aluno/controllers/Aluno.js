'use strict';

/**
 * Aluno.js controller
 *
 * @description: A set of functions called "actions" for managing `Aluno`.
 */

module.exports = {

  /**
   * Retrieve aluno records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.aluno.search(ctx.query);
    } else {
      return strapi.services.aluno.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a aluno record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.aluno.fetch(ctx.params);
  },

  /**
   * Count aluno records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.aluno.count(ctx.query);
  },

  /**
   * Create a/an aluno record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.aluno.add(ctx.request.body);
  },

  /**
   * Update a/an aluno record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.aluno.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an aluno record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.aluno.remove(ctx.params);
  }
};
