// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here

// test Truck constructor
console.log('Testing Truck Constructor');
var myTruck = new Truck('Chevrolet', 'Colorado', 2016, 'Silver', undefined, ['Becky']);
assert.strictEqual(myTruck instanceof Truck, true, 'Not an instance of Truck');
assert.strictEqual(myTruck instanceof Car, true, 'Not an instance of Car');
assert.strictEqual(myTruck.make, 'Chevrolet', 'Constructor didnt set make');
assert.strictEqual(myTruck.model, 'Colorado', 'Constructor didnt set mode');
assert.strictEqual(myTruck.year, 2016, 'Constructor didnt set year');
assert.strictEqual(myTruck.color, 'Silver', 'Constructor didnt set color');
assert.strictEqual(myTruck.seats, 3, 'Constructor didnt set default seats'); // Default seat case
myTruck.seats = 5;
assert.strictEqual(myTruck.seats, 5, 'Constructor didnt set seats');
success();
console.log('Truck passed all tests');


