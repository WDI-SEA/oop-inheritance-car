#Bodyshop Part 2

Cars are great and all, but now it's time to extend this app and make it handle more types of vehicles.

Remember TDD? This time, you'll have to make your own tests for each feature. As a reminder, here's the workflow:

1. Read each feature below and think about what it's asking for.
2. Create a test (in test.js) to test the feature
3. Run the test
4. Write / revise code (in Motorcycle.js/Truck.js) to pass test, if necessary
5. Repeat 3 and 4 until you pass all tests
6. Move on to the next feature (start back at step 1)

##Getting Started

* Fork and clone the repository
* Run `npm install` to install dependencies
  * `npm run lint:js` - lint JS
  * `npm test` - run test suite

## Requirements

###Pair Programming

For more real-world TDD experience, you'll pair up with a partner and practice pair programming, a technique used by companies such as Pivotal Labs. When pair programming, one person will act as the "driver", writing the code, while the other person acts as the "navigator", reviewing the code. Switch off every 10 minutes or so.

###Part 1 -- Motorcycles

Create a new constructor called `Motorcycle` that extends your `Car` constructor.

This should be done in the file called `Motorcycle.js` which requires `Car.js` to function. Additionally your `test.js` will need to require `Motorcycle.js` (already done for you).

A `Motorcycle`...

* Must be an instanceof `Motorcycle`
* Must be an instanceof `Car`
* Cannot have more than 2 seats (constructor)
* Should be able to `wheelie()` but only if running. Return true and console.log `"Doing a sick wheelie!!"` on success otherwise return false.

There should be tests for each one of the bullet points above.

###Part 2 -- Trucks

Create a new constructor called `Truck` that extends `Car`. Add the following features.

This should be done in a new file called `Truck.js` which will need to require `Car.js` to function and export the constructor (similar to what's done in `Motorcycle.js`). Additionally your `test.js` will need to require `Truck.js`

A `Truck`...

* Must be an instanceof `Truck`
* Must be an instanceof `Car`.
* Should have the following constructor parameters:
  * make
  * model
  * year
  * color
* Should default to 3 seats.

There should be tests for each one of the bullet points above.
