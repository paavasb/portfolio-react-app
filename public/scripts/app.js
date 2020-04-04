'use strict';

var appRoot = document.getElementById('app');

var details = "These are some important details";
var toggleOn = false;
var buttonTextOff = 'Show details';
var buttonTextOn = 'Hide details';
var onClickHandler = function onClickHandler() {
    toggleOn = !toggleOn;
    render();
};
var render = function render() {
    var toggleTemplate = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onClickHandler },
            toggleOn ? buttonTextOn : buttonTextOff
        ),
        toggleOn && React.createElement(
            'p',
            null,
            details
        )
    );

    ReactDOM.render(toggleTemplate, appRoot);
};

render();
