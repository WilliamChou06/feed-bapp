const localtunnel = require('localtunnel');
const PORT = 5000;
localtunnel(PORT, { subdomain: 'shibishibixd' }, (err, tunnel) => {
  console.log(`LT running on port ${PORT}`);
});
