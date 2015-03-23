/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Import Bootstrap
app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');

// Import D3
app.import('bower_components/d3/d3.min.js');

// Import metrics-graphics
app.import('bower_components/metrics-graphics/dist/metricsgraphics.css');
app.import('bower_components/metrics-graphics/dist/metricsgraphics.min.js');

// Import pikaday
app.import('bower_components/moment/moment.js');
app.import('bower_components/pikaday/pikaday.js');
app.import('bower_components/pikaday/css/pikaday.css');

module.exports = app.toTree();
