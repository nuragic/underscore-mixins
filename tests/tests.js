requirejs.config({
  baseUrl: '../',
  shim: {
    underscore: {
      exports: '_'
    }
  }
});

define([
  'underscore',
  'mixins'
],

function (_, mixins) {

  test("_.squeeze", function() {
    
    var json = {
      one: {
        a: [
          {
            a_a: 'one_a_a',
            a_b: {
              a_b_a: ['one_a_b_a_1', 'one_a_b_2']
            }
          }
        ],
        b: "ONE B",
        c: [
          {
            'c_1' : [],
            'c_2' : ['c2..', ['maxtrix']],
            'c_3' : {}
          }
        ]
      }
    };

    var expected = ['one_a_a', 'one_a_b_a_1', 'one_a_b_2', "ONE B", 'c2..', 'maxtrix'];

    var result = _.squeeze(json);

    deepEqual(result, expected, "Must be the same");

  });

});