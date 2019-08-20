const compression = require('compression');

module.exports = {
  version: '0.0.0',
  policies: ['compression'],
  init: pluginContext => {
    pluginContext.registerPolicy({
      name: 'compression',
      policy: compression
    });
  }
};
