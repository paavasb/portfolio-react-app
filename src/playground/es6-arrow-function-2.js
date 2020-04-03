const add = (a, b) => {
    //console.log(arguments);
    return a + b;
}
console.log(add(55, 1, 1001));

const user = {
    name: 'Paavas',
    cities: ['New Delhi', 'Nashville', 'Atlanta', 'Edinburgh'],
    printPlacesLived() {
        return this.cities.map((city)=> this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 8,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}; 

console.log(multiplier.multiply());