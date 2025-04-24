const express = require('express');
const { createProxyMiddleware } = require('./functions/create-proxy-mw.js');
const { firewall, backend, frontend } = require('./config.json');

const app = express();

// Rate Limit Configuration
app.use(require('express-rate-limit')(firewall.rateLimitConfig));

// Secure Policy for front-end
app.use(require('helmet')({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"]
    }
  }
}));
// Parser Using for Web Requests
app.use(require('cookie-parser')());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Check IP addresses against allowed list before processing requests
app.use(async (req, res, next) => {
  const address = req.ip || req.connection.remoteAddress;
  if(!address || !firewall.alloweds.includes(address)) {
    console.error(`(${address}) Unexpected request from. Request denied.`);
    return res.status(403).json({ message: 'Forbidden' });
  } else return next();
});

// Proxy
app.use('/api', createProxyMiddleware(backend.PORT, '/api'));
app.use('/', createProxyMiddleware(frontend.PORT));   

app.listen(firewall.PORT, () => {
  console.log(`Firewall is running on port ${firewall.PORT}`);
});
