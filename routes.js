const nextRoutes = require('next-routes');

const routes = nextRoutes();

// routes.add('blog', '/blog/:slug');
// routes.add('about', '/about-us/:foo(bar|baz)');
routes.add('search', '/search/:key');
// routes.add('api', '/api');

module.exports = routes;
