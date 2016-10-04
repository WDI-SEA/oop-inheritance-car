// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
console.log('Testing Motorcycle Constructor');
var myMotorcycle = new Motorcycle('Harley', 'chopper', 2005, 'Red');
assert.strictEqual(myMotorcycle.make, 'Harley', 'Constructor did not set make.');
assert.strictEqual(myMotorcycle.model, 'chopper', 'Constructor did not set model.');
assert.strictEqual(myMotorcycle.year, 2005, 'Constructor did not set year.');
assert.strictEqual(myMotorcycle.color, 'Red', 'Constructor did not set color.');
assert.strictEqual(myMotorcycle.seats, 2, 'Constructor did not set seats.');
assert.strictEqual(myMotorcycle instanceof Motorcycle, true, 'myMotorcycle is not an instance of Truck');
assert.strictEqual(myMotorcycle instanceof Car, true, 'myMotorcycle is not an instance of Car');
assert.strictEqual(myMotorcycle.wheelie(), false, 'You cant do a wheelie without starting your bike you noob!');
console.log("Starting your motorcycle.");
myMotorcycle.start();
console.log("Testing your wheelie skills.");
assert.strictEqual(myMotorcycle.wheelie(), true, 'You,ve got issues with your not-so-sick wheelies!');
success("You are a motorcycle beast!!!");