const nextRoutes = require('next-routes');
const routes = nextRoutes();

routes.add('blog', '/blog/:slug');
routes.add('about', '/about-us/:foo(bar|baz)')

module.exports = routes;
