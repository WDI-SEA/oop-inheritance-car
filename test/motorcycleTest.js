// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
console.log('Begin MotorCycle Tests');
var myMoto = new Motorcycle('yamaha', 'ZX', 2000, 'red', 1, '0');
var myCar = new Car('Acura', 'Integra', 1999, 'Red', 4);
assert.strictEqual((myMoto instanceof Car), true, 'Make a motorcylce, dummy');
assert.strictEqual((myCar instanceof Car), true, 'Make a car, dummy');
assert.strictEqual(myMoto.make, 'yamaha', "constructor did not set make");
assert.strictEqual(myMoto.model, 'ZX', "constructor did not set model");
assert.strictEqual(myMoto.year, 2000, "constructor did not set year");
assert.strictEqual(myMoto.color, 'red', "constructor did not set color");
assert.strictEqual(myMoto.seats, 1, "constructor did not set seats");
assert.strictEqual(myMoto.passengers, '0', "constructor did not set passengers");
success();

/////////Part 2
// test wheelie
console.log('Testing wheelie function');
assert.equal(typeof(myMoto.turnOn), 'function', 'there is no turnOn() function');
myMoto.turnOn();
assert.equal(typeof(myMoto.wheelie), 'function', 'there is no wheelie() function');
myMoto.wheelie();
assert.strictEqual(myMoto.wheelie(), true, 'Failed to do sick wheelie, should return true');
success();