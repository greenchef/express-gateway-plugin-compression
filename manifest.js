const compression = require('compression');

module.exports = {
  version: '1.2.0',
  init: pluginContext => {
    pluginContext.registerPolicy({
      name: 'compression',
      policy: compression
    });
  },
  policies: ['compression'],
  schema: {
    $id: 'N/A',
  },
};
