underscore-mixins
=================

A collection of underscore mixins.

*squeeze* – or JSON flatten - 
Returns an array with only the string values of the given object (any deep).

Example usage: implementing a search method in a Backbone.Collection

```js
Backbone.Collection.extend({
    
    // ....

    search: function (criteria) {

      return this.filter(function (model) {

        var modelValuesArray = _.squeeze(model.toJSON());
        
        return modelValuesArray.toString().search(new RegExp(criteria, 'gi')) !== -1 ;

      });
    }
    
  });
```
