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

// module.exports = {
//   name: 'basic-to-jwt',
//   schema: {
//     $id: 'N/A',
//     type: 'object',
//     properties: {
//       authUrl: { // Where to access the auth service for passing the basic credentials
//         type: 'string',
//       }
//     }
//   },
//   policy: ({ authUrl }) => {
//     return async (req, res, next) => {
//       try {
//         const authHeader = (req.headers || {}).authorization;
//         if (authHeader && authHeader.startsWith('Basic ')) {
//           const token = await request({
//             uri: authUrl,
//             headers: req.headers,
//           });
//           req.headers = {
//             ...req.headers,
//             authorization: `Bearer ${token}`,
//           }
//         }
//       } catch (e) {
//         console.error('Request to auth service failed. Error:', e.error)
//         res.status(e.statusCode).send(e.message)
//         return;
//       }
//       next();
//     };
//   }
// };
