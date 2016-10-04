// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here

var myTruck = new Truck('Honda', 'CRV', 2008, 'red', 3, 1);

console.log('Testing the truck!');

// Testing... Make
assert.strictEqual(myTruck.make, 'Honda', 'Your truck isn\'t a Honda!');
success('Your truck is a Honda!');

// Testing... Model
assert.strictEqual(myTruck.model, 'CRV', 'Your Honda isn\'t a CRV!');
success('Your Honda is a CRV!');

// Testing... Year
assert.strictEqual(myTruck.year, 2008, 'Your Honda CRV isn\'t from 2008!');
success('Your Honda CRV is from 2008!');

// Testing... Color
assert.strictEqual(myTruck.color, 'red', 'Your Honda isn\t red!');
success('Your 2008 Honda CRV is red!');

// Testing... Seats
assert.strictEqual(myTruck.seats, 3, 'Your 2008 red Honda CRV doesn\'t have 3 seats!');
success('Your 2008 red Honda CRV has 3 seats!')

// Testing... Passengers
assert.strictEqual(myTruck.passengers, 1, 'There is more than 1 passenger!');
success('There is only 1 passsenger!');


