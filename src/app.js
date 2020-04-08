import React from 'react';
import ReactDOM from 'react-dom';

const template = <p>This is JSX from Webpack</p>;
ReactDOM.render(template, document.getElementById('app'));

//import './utils.js';
// import subtract, {add, square} from './utils.js';

// console.log('app.js is running');
// console.log(square(4));
// console.log(add(4, 5));
// console.log(subtract(100, 19));

// import isSenior, {isAdult, canDrink} from './person.js';

// console.log(isAdult(20) ? 'Adult' : 'Child');
// console.log(canDrink(20) ? 'Chug Chug' : 'Fruit Beer');
// console.log(isSenior(69) ? 'Sr.' : 'Not Sr.');
