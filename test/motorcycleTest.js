// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
// test object
var moto = new Motorcycle("Harley", "T3000", "1995", "red", ["Peggy Hill"]);
// Tests if motorcycle is an instance of Car and Motercycle
assert.strictEqual(moto instanceof Motorcycle, true, "moto chould be instance of Moto");
assert.strictEqual(moto instanceof Car, true, "moto should be instance of Car");
success();

console.log( "Test properties exist")
assert.strictEqual(moto.make, "Harley", "moto should have make property");
success();
assert.strictEqual(moto.model, "T3000", "moto should have model property");
success();
assert.strictEqual(moto.year, "1995", "moto should have year property");
success();
assert.strictEqual(moto.color, "red", "moto should have color property");
success();
assert.strictEqual(moto.seats, 2, "moto should have seats property");
success();
assert.deepEqual(moto.passengers, ["Peggy Hill"], "moto should have passengers property");
success();

// Car.prototype test
// Call function
moto.start();
console.log(moto);
console.log(moto.wheelie());
//
console.log("Check if wheelie function is a function");
assert.strictEqual(typeof(moto.wheelie), "function", "wheelie is not a function of moto");
console.log("Check if wheelie moto is running");
assert.strictEqual(moto.running, true, "moto is not running");
success();
