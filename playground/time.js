var moment = require('moment');

// Jan 1st 1970 00:00:00 am

// var date = moment();
// date.add(100, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var date = moment();
console.log(date.format('h:mm a'));
