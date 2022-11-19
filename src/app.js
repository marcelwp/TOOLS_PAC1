const moment = require('moment');
const lunersee = moment({year: 2022, month: 10, day:1});
document.getElementById('lunerseeCaption').innerText = "Taken from Marcel's phone " + lunersee.fromNow();

