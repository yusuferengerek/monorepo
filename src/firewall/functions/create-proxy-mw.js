module.exports = function (port, base = '') {
  return (req, res) => {
    const options = {
      hostname: 'localhost',
      port: port,
      path: req.originalUrl.replace(base, ''),
      method: req.method,
      headers: req.headers
    };
    
    const preq = http.request(options, (pres) => {
      res.writeHead(pres.statusCode, pres.headers);
      pres.pipe(res, { end: true });
    });

    req.pipe(preq, { end: true });
  };
}
