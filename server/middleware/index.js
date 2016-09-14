var bodyParser = require('body-parser');
var morgan = require('morgan');

// Our custom viewCounter middleware
var viewCounter = function () {
  var views = 0;
  return function (req, res, next) {
    // Attach the incremented view count to the request object...
    req.views = ++views;
    // ...and pass the request onto the next middleware.
    next();
  };
};

module.exports = function (app) {
  // TODO: Mount our custom viewCounter middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan('dev'));
};
