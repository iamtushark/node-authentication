const express = require('express');
const authenticateJWT = require('../middlewares/auth');

function createProtectedRouter() {
  const router = express.Router();

  // Wrap the router methods to include the authentication middleware
  const methods = ['get', 'post', 'put', 'delete', 'patch'];
  
  methods.forEach(method => {
    const originalMethod = router[method];
    router[method] = (path, ...handlers) => {
      // Prepend the authentication middleware to the handlers
      const protectedHandlers = [authenticateJWT, ...handlers];
      return originalMethod.call(router, path, ...protectedHandlers);
    };
  });

  return router;
}

module.exports = createProtectedRouter;