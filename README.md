underscore-mixins
=================

This is an open collection of underscore mixins*. Feel free to criticize/contribute.

*_.squeeze(object)*
----------
(AKA extract/flatten) - Walks over the given Object and returns an Array with only its values. See the test for more details.

**Example usage** 

You can easily implement a search method for your Backbone.Collection using *_.squeeze* as showed below:

```js
Backbone.Collection.extend({
    
  // …
  
  search: function (criteria) {
    
    return this.filter(function (model) {
      
      var modelValuesArray = _.squeeze(model.toJSON());
      
      return modelValuesArray.toString().search(new RegExp(criteria, 'gi')) !== -1 ;
    });
  }

});
```


*\*just one for now! :D*
