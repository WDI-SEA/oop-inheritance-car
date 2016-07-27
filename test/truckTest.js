// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here
console.log("testing truck");
var myTruck = new Truck("Ford", "F150", 1995, "Grey", 3, ["bob", "bill"]);
console.log(myTruck instanceof Car);
assert.deepEqual(true, myTruck instanceof Car, "Truck not instance of Car");
assert.strictEqual(true, myTruck instanceof Truck, "Truck not instance of truck");
assert.strictEqual(myTruck.make, "Ford", "Didn't make a Make constuctor");
assert.strictEqual(myTruck.model, "F150", "Truck doesn't have model constuctor");
assert.strictEqual(myTruck.year, 1995, "Truck doesn't have year constructor");
assert.strictEqual(myTruck.color, "Grey", "Truck doesn;t have a color constructor");
assert.strictEqual(myTruck.seats, 3, "Truck doesn't have seats constructor");
var mySeatlessTruck = new Truck("Ford", "F250", 1995, "Grey");
assert.strictEqual(mySeatlessTruck.seats, 3, "Truck doesn't default to 3 seat when there are no seats declared");
assert.deepEqual(myTruck.passengers, ["bob", "bill"], "Truck doesn't have passenger constructor");
success();

