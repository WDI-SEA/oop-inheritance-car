// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
console.log('Testing Motorcycle Constructor');// declared an instance of Truck and assigned values

var myMotorcycle = new Motorcycle('HARLEY-DAVIDSON', 'STREET® 500', 2016, 'Black', 2 ,['Antonio']);
var myCar = new Car('Honda', 'Fit', 2013, 'Midnight Plum', 5, []);
assert.strictEqual(myMotorcycle.make, 'HARLEY-DAVIDSON', 'Constructor did not set make.');
assert.strictEqual(myMotorcycle.model, 'STREET® 500', 'Constructor did not set model.');
assert.strictEqual(myMotorcycle.year, 2016, 'Constructor did not set year.');
assert.strictEqual(myMotorcycle.color, 'Black', 'Constructor did not set color.');
assert.strictEqual(myMotorcycle.seats, 2, 'Constructor did not set seats.');
assert.deepEqual(myMotorcycle.passengers, ['Antonio'], 'Constructor did not set passengers.');//deepEqual for arrays
assert.strictEqual(myMotorcycle instanceof Motorcycle, true, 'Constructor is not instance of Motorcycle'); //check docs
assert.strictEqual(myMotorcycle instanceof Car, true, 'Constructor is not instance of Car');
myMotorcycle.start();
assert.strictEqual(myMotorcycle.wheelie(), true, 'You are not doing a wheelie');
success('Motorcycle is instance of Motorcycle and Car');
success();

// test wheelie while running
// myMotorcycle.wheelie(true);
