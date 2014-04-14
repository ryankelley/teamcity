(function() {
  var Change;

  Change = (function() {
    function Change(locator, client) {
      this.locator = locator;
      this.client = client;
    }

    Change.prototype.info = function(cb) {
      if (typeof this.locator !== 'number' && typeof this.locator !== 'string') {
        throw 'Calls to info require a change ID';
      }
      return this.client._get("/changes/" + this.locator);
    };

    Change.prototype.query = function(cb) {
      if (typeof this.locator === 'number' || typeof this.locator === 'string') {
        return this.client._get("/changes/" + this.locator);
      } else {
        return this.client._get("/changes?locator=" + this.locator.locator);
      }
    };

    return Change;

  })();

  module.exports = Change;

}).call(this);