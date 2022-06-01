var jsonData = require('./json/markers.json');
var sustainable = jsonData.filter( element => element.sustainable == "true")
console.log(sustainable);
