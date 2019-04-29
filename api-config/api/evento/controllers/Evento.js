'use strict';

/**
 * Evento.js controller
 *
 * @description: A set of functions called "actions" for managing `Evento`.
 */

module.exports = {

  /**
   * Retrieve evento records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.evento.search(ctx.query);
    } else {
      return strapi.services.evento.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a evento record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.evento.fetch(ctx.params);
  },

  /**
   * Count evento records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.evento.count(ctx.query);
  },

  /**
   * Create a/an evento record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.evento.add(ctx.request.body);
  },

  /**
   * Update a/an evento record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.evento.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an evento record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.evento.remove(ctx.params);
  }
};
