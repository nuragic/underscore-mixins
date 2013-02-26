underscore-mixins
=================

This is an open collection of underscore mixins*. Feel free to criticize/contribute.


*_.squeeze* (AKA infinitely deep JSON extract) 
---------

**Problem:** Ahhw! I need to to filter a Backbone.Collection!

**Solution:** You can easily implement a search method using _.squeeze + JS native String.search() like showed below.

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


*\*only one for now! XD*
