//load the assert plugin (for testing)
var assert = require('assert');

//load the Car class
var Car = require('./Car.js');
var Motorcycle = require('./Motorcycle.js');
var Truck = require('./Truck.js');

////// TEST PHASE 1 /////////////////////////////////////////

//test constructor
console.log('Testing Constructor');
var myCar = new Car('Acura', 'Integra', 1999, 'Red', 4);
assert.strictEqual(myCar.make,'Acura','Constructor did not set make.');
assert.strictEqual(myCar.model,'Integra','Constructor did not set model.');
assert.strictEqual(myCar.year,1999,'Constructor did not set year.');
assert.strictEqual(myCar.color,'Red','Constructor did not set color.');
assert.strictEqual(myCar.seats,4,'Constructor did not set seats.');
success();

//test sell
console.log('Testing selling a car');
myCar.sell('Lenny');
assert.strictEqual(myCar.owner,'Lenny','Failed to sell the car to Lenny. Car owner is: "'+myCar.owner+'"');
assert.deepEqual(myCar.previousOwners,['manufacturer'],'Previous owners not updated.');
success();

//test paint
console.log('Testing painting a car');
myCar.paint('Blue');
assert.strictEqual(myCar.color,'Blue','Failed to paint the car Blue. Car is: "'+myCar.color+'"');
success('YAY!!! You finished phase 1. Continue to phase 2.');


////// TEST PHASE 2 /////////////////////////////////////////

//test start
console.log('Testing starting the car');
assert.equal(typeof(myCar.start),'function','there is no start() function');
myCar.start();
assert.strictEqual(myCar.running,true,'Failed to start the car. running should = true');
success();

//test start
console.log('Testing turning off the car');
assert.equal(typeof(myCar.off),'function','there is no off function');
myCar.off();
assert.strictEqual(myCar.running,false,'Failed to turn off the car. running should = false');
success();

//test driveTo
console.log('Testing driving the car');
assert.equal(typeof(myCar.driveTo),'function','there is no driveTo function');
assert.strictEqual(typeof(myCar.driveTo('place')),'boolean','DriveTo function did not return a boolean value');
assert.strictEqual(myCar.driveTo('place'),false,'Car allowed driving while NOT running.');
myCar.start();
assert.strictEqual(myCar.driveTo('place'),true,'Car did not allow driving while running.');
success();

//test driveTo
console.log('Testing parking the car');
assert.equal(typeof(myCar.park),'function','there is no park function');
assert.strictEqual(typeof(myCar.park()),'boolean','park function did not return a boolean value');
assert.strictEqual(myCar.park(),false,'Car did not allow parking while NOT running.');
myCar.off();
assert.strictEqual(myCar.park(),true,'Car allowed parking while running.');
success('YAY!!! You finished phase 2. Continue to phase 3. Almost done.');


////// TEST PHASE 3 /////////////////////////////////////////

//test constructor with passengers
console.log('Testing Constructor (with passsengers)');
myCar = new Car('Acura', 'Integra', 1999, 'Red', 4);
assert.deepEqual(myCar.passengers,[],"Passengers does not default to an empty array if left blank.");
myCar = new Car('Acura', 'Integra', 1999, 'Red', 4, ['Anil','Sarah']);
assert.deepEqual(myCar.passengers,['Anil','Sarah'],"Passengers array not updated. Expected ['Anil','Sarah']");
success();

//test pickUp
console.log('Testing picking up a passenger');
assert.equal(typeof(myCar.pickUp),'function','there is no pickUp function');
assert.strictEqual(typeof(myCar.pickUp()),'boolean','pickUp function did not return a boolean value');
assert.strictEqual(myCar.pickUp('Randall'),false,'Car did allowed picking up a passenger while NOT running (returned true).');
myCar.start();
assert.strictEqual(myCar.pickUp('Randall'),true,'Car did not allow picking up a passenger (returned false).');
assert.deepEqual(myCar.passengers,['Anil','Sarah','Randall'],"Passengers array not updated. Expected ['Anil','Sarah','Randall']");
success();

//test pickUp
console.log('Testing seat limit');
assert.strictEqual(myCar.pickUp('Jane Doe'),false,'Car allowed picking up a passenger despite all seats being filled.');
assert.deepEqual(myCar.passengers,['Anil','Sarah','Randall'],"Passengers array updated despite all seats being filled. Expected ['Anil','Sarah','Randall']");
success();

//test dropOff
console.log('Testing dropping off a passenger');
assert.equal(typeof(myCar.dropOff),'function','there is no dropOff function');
var badDrop = myCar.dropOff('NotInTheCar');
assert.strictEqual(typeof(badDrop),'boolean','dropOff function did not return a boolean value');
assert.strictEqual(badDrop,false,'Car allowed drop-off despite passenger not being in the car. (returned true)');
assert.deepEqual(myCar.passengers,['Anil','Sarah','Randall'],"Passengers array updated despite being called with an invalid passenger. Expected ['Anil','Sarah','Randall']");
myCar.off();
assert.strictEqual(myCar.dropOff('Anil'),false,'Car allowed dropping off a passenger when the car was off.');
assert.deepEqual(myCar.passengers,['Anil','Sarah','Randall'],"Passengers array updated despite car being off. Expected ['Anil','Sarah','Randall']");
myCar.start();
assert.strictEqual(myCar.dropOff('Anil'),true,'Car did NOT allow dropping off up a passenger when the car was running.');
assert.deepEqual(myCar.passengers,['Sarah','Randall'],"Passengers array not updated. Expected ['Anil','Sarah','Randall','Aaron']");
success();

//test pickUp
console.log('Testing seat after drop off');
assert.strictEqual(myCar.pickUp('Jana Doe'),true,'Car did not allow picking up a passenger after freeing a seat.');
assert.deepEqual(myCar.passengers,['Sarah','Randall','Jana Doe'],"Passengers array not updated. Expected ['Sarah','Randall','Jana Doe']");
success();

//testing passenger count
console.log('Testing passenger count');
assert.equal(typeof(myCar.passengerCount),'function','there is no passengerCount function');
assert.strictEqual(typeof(myCar.passengerCount()),'number','passengerCount function did not return a number value');
assert.strictEqual(myCar.passengerCount(),3,'Passenger count seems inaccurate. Expected 3.');
success('Your Car is ready. Now it\'s time to implement the Motorcyle and Truck');


//ADD TESTS HERE FOR MOTORCYCLE AND TRUCK
// test instance of motorcycle
console.log('Testing Motorcyle istanceof');
var myMotorcycle = new Motorcycle(2,false);
assert.equal(myMotorcycle instanceof Motorcycle,true,'Motorcyle is not an instance of Motorcycle');
assert.equal(myMotorcycle instanceof Car, true, 'Motorcycle is not an instance of Car');
assert.equal(typeof(myMotorcycle.Wheelie), 'function' , 'There is no Wheelie()');
assert.strictEqual(myMotorcycle.seats <= 2, true, 'Motorcycle can not have more then two seats');
success();

// test motorcycle wheelie
console.log('Testing Motorcycle Wheelie');
assert.strictEqual(myMotorcycle.running,false,'You can not do a wheelie without the Motorcycle running');
success();

// test instanceof Truck
console.log('Testing Truck instanceof');
var myTruck = new Truck('ford','f150', 2016, 'blue', 3, 1500, 1000);
assert.strictEqual(typeof(myTruck.load()), "boolean", "load() did not return a boolean ");
assert.equal(myTruck instanceof Truck,true,"Truck is not an instance of Trucks");
assert.equal(myTruck instanceof Car, true, "Truck is not an instance of Car");
assert.strictEqual(myTruck.make,'ford','Constructor did not set make.');
assert.strictEqual(myTruck.model,'f150','Constructor did not set model.');
assert.strictEqual(myTruck.year,2016,'Constructor did not set year.');
assert.strictEqual(myTruck.color,'blue','Constructor did not set color.');
assert.strictEqual(myTruck.seats,3,'Constructor did not set seats.');
success();

// test loading cargo into truck
console.log('Testing cargo load');
assert.equal(typeof(myTruck.load), "function", "There is no load()");
assert.strictEqual(myTruck.cargo < myTruck.capacity, true, "Truck can not carry cargo over it's capacity");
success();

// test unloading cargo from truck
console.log('Testing cargo unload');
var myTruck = new Truck('ford','f150', 2016, 'blue', 3, 1000, 1500);
assert.equal(typeof(myTruck.unload), "function", "There is no unload()");
assert.strictEqual(typeof(myTruck.unload()), "boolean", "unload() does not return a boolean");
assert.strictEqual(myTruck.cargo > myTruck.capacity, true, "You can't unload cargo more then cargo in the truck");
success();


// simple helper function to output success of tests (DRY)
function success(extra){
    console.log('...success');
    console.log(' ');
    if(extra){
        console.log('-------------------------')
        console.log(extra);
        console.log('-------------------------')
        console.log(' ');
    }

}