// simple helper function to output success of tests
module.exports = function(extra) {
  console.log('...success');
  console.log(' ');
  if (extra) {
    console.log('-------------------------');
    console.log(extra);
    console.log('-------------------------');
    console.log(' ');
  }
};
