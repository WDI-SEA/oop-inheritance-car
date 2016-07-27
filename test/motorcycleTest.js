// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
console.log("testing Motorcycle");

var myCycle = new Motorcycle("Kawaskai", "Ninja", 2000, "Red", ["Bob"]);

assert.strictEqual(true, myCycle instanceof Car, "Motorcycle not an instance of car");
assert.strictEqual(true, myCycle instanceof Motorcycle, "Motorcycle not an instance of a Motorcycle object");
assert.strictEqual(myCycle.make, "Kawaskai", "Motorcycle has no Make contructor");
assert.strictEqual(myCycle.model, "Ninja", "Motorcycle has no model contructor");
assert.strictEqual(myCycle.year, 2000, "Motorcycle has no year contructor");
assert.strictEqual(myCycle.color, "Red", "Motorcycle has no color contructor");
assert.strictEqual(myCycle.seats, 2, "Motorcycle has no seat contructor");
assert.deepEqual(myCycle.passengers, ["Bob"], "Motorcycle has no passenger contructor");
success();

console.log("testing wheelie function");
assert.equal(typeof(myCycle.wheelie), 'function', 'there is no wheelie function');
success();