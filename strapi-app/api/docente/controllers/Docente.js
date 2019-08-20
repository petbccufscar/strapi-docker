'use strict';

/**
 * Docente.js controller
 *
 * @description: A set of functions called "actions" for managing `Docente`.
 */

module.exports = {

  /**
   * Retrieve docente records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.docente.search(ctx.query);
    } else {
      return strapi.services.docente.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a docente record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.docente.fetch(ctx.params);
  },

  /**
   * Count docente records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.docente.count(ctx.query);
  },

  /**
   * Create a/an docente record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.docente.add(ctx.request.body);
  },

  /**
   * Update a/an docente record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.docente.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an docente record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.docente.remove(ctx.params);
  }
};
