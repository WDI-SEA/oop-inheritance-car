// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here

// test Truck constructor
console.log('Testing Truck Constructor');
var myTruck = new Truck('Chevrolet', 'Colorado', 2016, 'Silver');
assert.strictEqual(myTruck.make, 'Chevrolet', 'Constructor didnt set make!');
assert.strictEqual(myTruck.model, 'Colorado', 'Constructor didnt set mode!');
assert.strictEqual(myTruck.year, 2016, 'Constructor didnt set year!');
assert.strictEqual(myTruck.color, 'Silver', 'Constructor didnt set color!');
assert.strictEqual(myTruck.seats, 3, 'Constructor didnt default seat number to 3!');
myTruck.seats = 5;
assert.strictEqual(myTruck.seats, 5, 'Constructor didnt update the seat count to 5!');
success();








//is it an instance of truck?
console.log('Testing for instance of truck');
//is it an instance of car?
console.log('Testing for instance of car');
//does it have a make?
console.log('Testing for truck make');
//does it have a model?
console.log('Testing for truck model');
//does it have a year?
console.log('Testing for truck year');
//does it have a color?
console.log('Testing for truck color');
//does it have passengers?
console.log('Testing for truck passenger array');
//does it have seats that default to 3?
console.log('Testing for seats count default');

console.log('W00T~! Your truck constructor is the best!');


