var authMiddleware = require('./middlewares/authentication');
var authController = require('./controllers/oauth2');
var AutoLoader = require('./autoLoader');
var Configuration = require('./configuration');

function IdentityManager(bookshelf) {
  if (bookshelf) {
    AutoLoader.init(bookshelf);
  }
}

IdentityManager.prototype.init = function(options) {
  Configuration.init(options);
}

IdentityManager.prototype.getModel = function(name) {
  return AutoLoader.getModel(name);
}

IdentityManager.prototype.getBookshelf = function() {
  return AutoLoader.getBookshelf();
}

IdentityManager.prototype.getConfig = function() {
  return Configuration.getParams();
}

//Expose oauth2orize middlewares functions
IdentityManager.prototype.isAuthenticated = authMiddleware.isAuthenticated;
IdentityManager.prototype.isClientAuthenticated = authMiddleware.isClientAuthenticated;

//Expose oauth2orize controllers functions
IdentityManager.prototype.token = authController.token;
IdentityManager.prototype.logout = authController.logout;
IdentityManager.prototype.authorization = authController.authorization;
IdentityManager.prototype.decision = authController.decision;

exports = module.exports = function(bookshelf) {
  return new IdentityManager(bookshelf);
}