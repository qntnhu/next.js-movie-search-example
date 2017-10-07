const next = require('next');
const express = require('express');
const routes = require('./routes');
const getIMDbData = require('./lib/getIMDbData');

const getIMDbDataServerApi = getIMDbData.getIMDbDataServerApi;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app.prepare()
  .then(() => {
    const server = express();

    server.get('/api/search', getIMDbDataServerApi);

    server.get('*', (req, res) => {
      return handler(req, res);
    });

    server.listen(3000, (err) => {
      if (err) {
        throw err;
      }

      console.log('> Ready on http://localhost:3000');
    });
  });
