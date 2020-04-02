console.log('App is running');

var template = (
<div>
    <h1>Indecision App</h1> 
    <p>This is some info</p>
    <ol>
        <li>Item One</li>
        <li>Item Two</li>
    </ol>
</div>);

var templateTwo = (
    <div>
        <h1>Paavas Bhasin</h1>
        <p>Age: 20</p>
        <p>Location: New Delhi</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);