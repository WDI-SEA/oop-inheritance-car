// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here

// test constructor
console.log('Testing Truck Constructor');// declared an instance of Truck and assigned values

var myTruck = new Truck('Ford', 'F-150', 2016, 'Black', 0,['Billy']);
var myCar = new Car('Honda', 'Fit', 2013, 'Midnight Plum', 5, []);
assert.strictEqual(myTruck.make, 'Ford', 'Constructor did not set make.');
assert.strictEqual(myTruck.model, 'F-150', 'Constructor did not set model.');
assert.strictEqual(myTruck.year, 2016, 'Constructor did not set year.');
assert.strictEqual(myTruck.color, 'Black', 'Constructor did not set color.');
assert.strictEqual(myTruck.seats, 3, 'Constructor did not set seats.');
assert.deepEqual(myTruck.passengers, ['Billy'], 'Constructor did not set passengers.');//deepEqual for arrays
assert.strictEqual(myTruck instanceof Truck, true, 'Constructor is not instance of Truck'); //check docs
assert.strictEqual(myTruck instanceof Car, true, 'Constructor is not instance of Car');
success('Truck is instance of Truck and Car');
success();