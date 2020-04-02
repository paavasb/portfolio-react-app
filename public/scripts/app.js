console.log('App is running');

var template = /*#__PURE__*/React.createElement("h1", {
    id: "some"
  }, "This is JSX");
//var template = <p>This is JSX from app.js!</p>;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);