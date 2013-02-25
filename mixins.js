//mixins.js
define(['underscore'], function(_) {

  _.mixin({

    squeeze: function (obj) {

      function _squeeze(obj, result) {

        for (var propName in obj) {
          
          var propValue = obj[propName];

          if (propValue) {
            if (_.isArray(propValue)) {
              return _squeeze(propValue, result);
            }
            if (_.isObject(propValue)) {
              _squeeze(_.flatten(propValue), result);
            }
            if (_.isString(propValue)) {
              result.push(propValue);
            }
          }
        }

        return result;
      }

      return _squeeze(obj, []);
      
    }

  });

});