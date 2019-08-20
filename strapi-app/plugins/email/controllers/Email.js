'use strict';

/**
 * Email.js controller
 *
 * @description: A set of functions called "actions" of the `email` plugin.
 */

const _ = require('lodash');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.user_email,
    pass: process.env.user_password,
  }
});

module.exports = {
  send: async (ctx) => {
    // Retrieve provider configuration.
    const config = await strapi.store({
      environment: strapi.config.environment,
      type: 'plugin',
      name: 'email'
    }).get({ key: 'provider' });

    // Verify if the file email is enable.
    if (config.enabled === false) {
      strapi.log.error('Email is disabled');
      return ctx.badRequest(null, ctx.request.admin ? [{ messages: [{ id: 'Email.status.disabled' }] }] : 'Emailis disabled');
    }

    // Something is wrong
    if (ctx.status === 400) {
      return;
    }

    let options = ctx.request.body;

    var mailOptions = {
       from: process.env.user_email,
       to: config.sendmail_default_replyto,
       subject: 'Site DC:'+ctx.request.body.subject,
       text: 'Nome: '+ctx.request.body.name+'\nEmail: '+ctx.request.body.email+'Mensagem: '+ctx.request.body.text,
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    }); 

    ctx.send({});
  },

  getEnvironments: async (ctx) => {
    const environments =  _.map(_.keys(strapi.config.environments), environment => {
      return {
        name: environment,
        active: (strapi.config.environment === environment)
      };
    });

    ctx.send({ environments });
  },

  getSettings: async (ctx) => {
    let config = await strapi.plugins.email.services.email.getProviderConfig(ctx.params.environment);

    ctx.send({
      providers: strapi.plugins.email.config.providers,
      config
    });
  },

  updateSettings: async (ctx) => {
    await strapi.store({
      environment: ctx.params.environment,
      type: 'plugin',
      name: 'email'
    }).set({key: 'provider', value: ctx.request.body});

    ctx.send({ok: true});
  },
};

