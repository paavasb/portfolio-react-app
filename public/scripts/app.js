'use strict';

console.log('App is running');

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Paavas Bhasin'
    ),
    React.createElement(
        'p',
        null,
        'Age: 20'
    ),
    React.createElement(
        'p',
        null,
        'Location: New Delhi'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
