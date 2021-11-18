let Jasmine = require('jasmine');
let jasmine = new Jasmine;

(async () => {
  jasmine.loadConfigFile('G:/git/wd/spec/support/jasmine.json');
  jasmine.configureDefaultReporter({ showColors: true });
  jasmine.execute();


})();

