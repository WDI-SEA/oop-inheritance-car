// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
console.log('Checking Motorcycle instance');
var myMotorcycle = new Motorcycle('Honda', 'Fury', 2014, 'red', ['Brian']);
assert.strictEqual(myMotorcycle instanceof Motorcycle, true, 'Constructor is not instance of Motorcycle');
assert.strictEqual(myMotorcycle instanceof Car, true, 'Constructor is not instance of Car');
success('Motorcycle is instance of Motorcycle and Car');

console.log('Testing Motorcycle Constructor');
assert.strictEqual(myMotorcycle.make, 'Honda', 'Constructor did not set make');
assert.strictEqual(myMotorcycle.model, 'Fury', 'Constructor did not set model');
assert.strictEqual(myMotorcycle.year, 2014, 'Constructor did not set year');
assert.strictEqual(myMotorcycle.color, 'red', 'Constructor did not set color');
assert.deepEqual(myMotorcycle.passengers, ['Brian'], 'Constructor did not set passengers');
assert.strictEqual(myMotorcycle.seats, 2, 'Constructor did not set seats to default to 2');
success('Motorcycle constructor complete!');

console.log('Testing Motorcycle wheelie');
myMotorcycle.start();
assert.strictEqual(myMotorcycle.wheelie(), true, 'Motorcycle did not do a wheelie when turned on');
success('Motorcycle wheelie complete!');
