// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// test Motorcycle constructor
console.log('Testing Motorcycle Constructor');
var myMotorcycle = new Motorcycle('Piaggio', 'Typhoon', 2014, 'White', undefined, ['Dirty Bill']);
assert.strictEqual(myMotorcycle instanceof Motorcycle, true, 'Not an instance of Motorcycle');
assert.strictEqual(myMotorcycle instanceof Car, true, 'Not an instance of Car');
assert.strictEqual(myMotorcycle.make, 'Piaggio', 'Constructor didnt set make');
assert.strictEqual(myMotorcycle.model, 'Typhoon', 'Constructor didnt set mode');
assert.strictEqual(myMotorcycle.year, 2014, 'Constructor didnt set year');
assert.strictEqual(myMotorcycle.color, 'White', 'Constructor didnt set color');
assert.strictEqual(myMotorcycle.seats, 2, 'Constructor didnt set default seats'); // Default seat case
myMotorcycle.seats = 1;
assert.strictEqual(myMotorcycle.seats, 1, 'Constructor didnt set seats');

// test wheelie
console.log('Testing wheelie');
assert.equal(typeof(myMotorcycle.wheelie()), 'boolean', 'Wheelie function doesnt return boolean');
assert.equal(typeof(myMotorcycle.start), 'function', 'Motorcycle start function failed');
myMotorcycle.start();
assert.strictEqual(myMotorcycle.running, true, 'Motorcycle is not on right now');
assert.strictEqual(myMotorcycle.wheelie(), true, 'Motorcycle did not pop a wheelie when on');
myMotorcycle.off();
assert.strictEqual(myMotorcycle.wheelie(), false, 'Motorcycles is off and should not pop a wheelie');
success('Motorcyle passed all tests');