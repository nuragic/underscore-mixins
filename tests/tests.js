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
      "experience" : [{"position":"Front-end Team Leader","company":"Media Net Software","period":{"start":"February 2012","end":"Present","duration":"(1 year 1 month)","location":"Madrid Area, Spain"},"description":"Currently working on the new portal of BBVA bank. \r\n Writing HTML5, CSS3, SASS, modular JavaScript APIs, Backbone, underscore, jQuery &amp; more."},{"position":"Web developer","company":"Ticketea","period":{"start":"July 2010","end":"","duration":"(1 year 7 months)","location":"Madrid Area, Spain"},"description":"Building the product from scratch using SCRUM, TDD, LAMP, JavaScript (jQuery), XHTML, CSS, Git. Integrations with affiliates, Google and Facebook APIs."},{"position":"Web developer","company":"Comunica+A, The Internet Sales Company","period":{"start":"May 2009","end":"","duration":"(1 year 2 months)","location":"Madrid Area, Spain"},"description":"Websites for clients such as Orange, Endesa, MRW, McDonalds, Wilkinson, Alfa Romeo, Lancia, Real Madrid FC, entradas.com, Mutua Madrile&#xf1;a, la Caixa, red.es, AECEM, etc. LAMP, XHTML, CSS, JavaScript."},{"position":"Web developer","company":"Arionline s.r.l.","period":{"start":"2007","end":"","duration":"(2 years)","location":"Cagliari Area, Italy"},"description":"Software programming, R&amp;D projects, web apps, with Open Source technology."}],
      "languages"  : [{"language":"Italian","proficiency":"(Native or bilingual proficiency)"},{"language":"Spanish","proficiency":"(Native or bilingual proficiency)"},{"language":"English","proficiency":"(Limited working proficiency)"}],
      "skills"     : ["HTML5","CSS3","JavaScript","PHP","MySQL","jQuery","Backbone.js","Front-end Development","Scrum","Agile","TDD","MVC","OOP","Database Design","LAMP","PHP Frameworks","Git","Test Driven Development","HTML 5","Front-end"]};

    var expected = ["Front-end Team Leader", "Media Net Software", "February 2012", "Present", "(1 year 1 month)", "Madrid Area, Spain", "Currently working on the new portal of BBVA bank. \r\n Writing HTML5, CSS3, SASS, modular JavaScript APIs, Backbone, underscore, jQuery &amp; more.", "Web developer", "Ticketea", "July 2010", "(1 year 7 months)", "Madrid Area, Spain", "Building the product from scratch using SCRUM, TDD, LAMP, JavaScript (jQuery), XHTML, CSS, Git. Integrations with affiliates, Google and Facebook APIs.", "Web developer", "Comunica+A, The Internet Sales Company", "May 2009", "(1 year 2 months)", "Madrid Area, Spain", "Websites for clients such as Orange, Endesa, MRW, McDonalds, Wilkinson, Alfa Romeo, Lancia, Real Madrid FC, entradas.com, Mutua Madrile&#xf1;a, la Caixa, red.es, AECEM, etc. LAMP, XHTML, CSS, JavaScript.", "Web developer", "Arionline s.r.l.", "2007", "(2 years)", "Cagliari Area, Italy", "Software programming, R&amp;D projects, web apps, with Open Source technology.",
                    "Italian", "(Native or bilingual proficiency)", "Spanish", "(Native or bilingual proficiency)", "English", "(Limited working proficiency)",
                    "HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "jQuery", "Backbone.js", "Front-end Development", "Scrum", "Agile", "TDD", "MVC", "OOP", "Database Design", "LAMP", "PHP Frameworks", "Git", "Test Driven Development", "HTML 5", "Front-end"]

    var result = _.squeeze(json);

    deepEqual(result, expected, "Must be the same");

  });

});