'use strict'
// https://github.com/romuloalves/micro-post/blob/master/src/index.js

module.exports = exports = function (fn) {
  return (req, res) => {
    res.setHeader('Access-Control-Request-Method', 'POST, GET')
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    // res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Origin', 'https://micro-stripe.twnsnd.co');

    const {method} = req

    if (method === 'OPTIONS') {
      return {}
    }

    if (method === 'GET') {
       return {message: 'The Stripe charge server is up and running!', timestamp: new Date().toISOString()}
    }

    if (method === 'POST') {
      return fn(req, res)
    }

    else {
      res.writeHead(405)
      res.end('Method Not Allowed')
      return
    }
  }
}