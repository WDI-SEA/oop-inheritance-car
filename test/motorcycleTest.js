// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here

// test Motorcycle constructor
console.log('Testing Motorcycle Constructor');
var myMotorcycle = new Motorcycle('Piaggio', 'Typhoon', 2014, 'White', undefined, ['Dirty Bill']);
assert.strictEqual(myMotorcycle instanceof Motorcycle, true, 'Not an instance of Motorcycle!');
assert.strictEqual(myMotorcycle instanceof Car, true, 'Not an instance of Car');
assert.strictEqual(myMotorcycle.make, 'Piaggio', 'Constructor didnt set make!');
assert.strictEqual(myMotorcycle.model, 'Typhoon', 'Constructor didnt set mode!');
assert.strictEqual(myMotorcycle.year, 2014, 'Constructor didnt set year!');
assert.strictEqual(myMotorcycle.color, 'White', 'Constructor didnt set color!');
assert.strictEqual(myMotorcycle.seats, 2, 'Constructor didnt set default seats!'); // Default seat case
myMotorcycle.seats = 1;
assert.strictEqual(myMotorcycle.seats, 1, 'Constructor didnt set seats!');
success();

//does it pop a wheelie only when running?
console.log('Testing for wheelie poppability');
//does it let everyone know it popped a wheelie?
console.log('Testing for wheelie message');

console.log('W00T~! Your Motorcycle constructor is the best!');


