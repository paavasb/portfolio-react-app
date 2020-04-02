'use strict';

console.log('App is running');

var template = React.createElement(
  'h1',
  null,
  'IndecisionApp'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
