// Underscore mixins (AMD style)
define(function(require) {

  var _  = require('underscore');

  _.mixin({

    squeeze: function (obj) {
      var extract = function (obj, result) {
        _.each(obj, function(value, name) {
          if (value) {
            if (_.isArray(value)) {
              extract(value, result);
            } else if (_.isObject(value)) {
              extract(_.flatten(value), result);
            } else if (_.isString(value)) {
              result.push(value);
            }
          }
        })
        return result;
      }
      return extract(obj, []);
    }

  });

});
