const { Before } = require("@wdio/cucumber-framework");

Before({ name: 'console.log' }, () => {
  return console.log('Hello I am the before hook');
})