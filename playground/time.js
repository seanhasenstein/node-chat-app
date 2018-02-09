const moment = require('moment');

// Jan 1st 1970 00:00:10 am

// const date = new Date();
// const months = ['Jan', 'Feb']
// console.log(date.getMonth());

const createdAt = new Date();
const date = moment(createdAt);
console.log(date.format('h:mm a'));
