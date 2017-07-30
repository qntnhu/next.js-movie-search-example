const next = require('next');
const express = require('express');
const routes = require('./routes');
const getIMDbData = require('./lib/getIMDbData');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app.prepare()
  .then(() => {
    const server = express();

    server.get('/api', async(req, res) => {
      const { key } = req.query;
      let IMDbdata;

      if (key) {
        IMDbdata = await getIMDbData(key);
      }

      if (IMDbdata) {
        res.json({
          status: 'success',
          data: IMDbdata
        });
      } else {
        res.json({
          status: 'success',
          data: null
        });
      }
    });

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
