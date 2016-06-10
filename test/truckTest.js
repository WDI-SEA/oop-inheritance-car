// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here
// truck instance must be instance of Truck;
var truck = new Truck('Chevy', 'Nova', '1995', 'blue', ['Hank Hill']);
console.log('Testing if truck is instance of Truck and Car');
assert.strictEqual(truck instanceof Truck, true, 'truck should be an instance of Truck');
// truck instance of Car
assert.strictEqual(truck instanceof Car, true, 'truck should be an instance of Car');
success();

// Constructor must have parameters > make, model, year, color, seats, passengers
console.log('Test if truck has properties make, model, year, color, seats, passengers');
// this will return true because make exists, but is undefined
// Only checks key, not value//
    // assert.strictEqual(truck.hasOwnProperty("make"), true, "truck should have make property");
// checks value, not just key - references make input in line 11
assert.strictEqual(truck.make, 'Chevy', 'truck should have make property');
success();
assert.strictEqual(truck.model, 'Nova', 'truck should have model property');
success();
assert.strictEqual(truck.year, '1995', 'truck should have year property');
success();
assert.strictEqual(truck.color, 'blue', 'truck should have color property');
success();
assert.strictEqual(truck.seats, 3, 'truck should have seats property');
success();
assert.deepEqual(truck.passengers, ['Hank Hill'], 'truck should have passengers property');
success();
