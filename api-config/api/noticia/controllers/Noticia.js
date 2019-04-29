'use strict';

/**
 * Noticia.js controller
 *
 * @description: A set of functions called "actions" for managing `Noticia`.
 */

module.exports = {

  /**
   * Retrieve noticia records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.noticia.search(ctx.query);
    } else {
      return strapi.services.noticia.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a noticia record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.noticia.fetch(ctx.params);
  },

  /**
   * Count noticia records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.noticia.count(ctx.query);
  },

  /**
   * Create a/an noticia record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.noticia.add(ctx.request.body);
  },

  /**
   * Update a/an noticia record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.noticia.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an noticia record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.noticia.remove(ctx.params);
  }
};
