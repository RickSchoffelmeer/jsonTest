const jsonData = require('./json/markers.json');
var sustainable = JSON.parse(jsonData).filter(function (entry) {
  return entry.sustainable === 'true';
});
console.log(sustainable);
