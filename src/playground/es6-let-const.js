var nameVar = 'Paavas';
var nameVar = 'Aniket';
console.log('nameVar', nameVar);

let nameLet = 'Jake';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    let petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);

const fullName = 'Paavas Bhasin';
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);