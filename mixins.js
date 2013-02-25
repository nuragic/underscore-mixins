//mixins.js
define(['underscore'], function(_) {

  _.mixin({

    squeeze: function squeeze(obj, result) {

      var result = result || [];

      for (var propName in obj) {
        
        var propValue = obj[propName];

        if (propValue) {
          if (_.isArray(propValue)) {
            return squeeze(propValue, result);
          }
          if (_.isObject(propValue)) {
            squeeze(_.flatten(propValue), result);
          }
          if (_.isString(propValue)) {
            result.push(propValue);
          }
        }
      }

      return result;
    }

  });

});