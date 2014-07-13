(function() {
  var BuildTypeLocator, BuildTypes;

  BuildTypeLocator = require('./locators/build-type-locator');

  BuildTypes = (function() {
    function BuildTypes(client) {
      this.client = client;
    }

    BuildTypes.prototype.info = function(id, cb) {
      return this.locate(new BuildTypeLocator().id(id), cb);
    };

    BuildTypes.prototype.all = function(cb) {
      return this.client._get('/buildTypes', cb);
    };

    BuildTypes.prototype.locate = function(locator, cb) {
      return this.client._get('/buildTypes', {
        locate: locator.compile()
      }, cb);
    };

    return BuildTypes;

  })();

  module.exports = BuildTypes;

}).call(this);