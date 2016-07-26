// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here

// test Motorcycle constructor
console.log('Testing Motorcycle Constructor');
var myMotorcycle = new Motorcycle('Piaggio', 'Typhoon', 2014, 'White';
//is it an instance of Motorcycle?
console.log('Testing for instance of Motorcycle');
//is it an instance of car?
console.log('Testing for instance of car');
//does it have a make?
console.log('Testing for Motorcycle make');
//does it have a model?
console.log('Testing for Motorcycle model');
//does it have a year?
console.log('Testing for Motorcycle year');
//does it have a color?
console.log('Testing for Motorcycle color');
//does it have passengers?
console.log('Testing for Motorcycle passenger array');
//does it have seats that default to 2?
console.log('Testing for seats count default (2)');

//does it pop a wheelie only when running?
console.log('Testing for wheelie poppability');
//does it let everyone know it popped a wheelie?
console.log('Testing for wheelie message');

console.log('W00T~! Your Motorcycle constructor is the best!');


