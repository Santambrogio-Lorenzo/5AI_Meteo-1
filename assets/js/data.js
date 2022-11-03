var forecast = data;
let date = forecast.map(x => x.data);
console.log("date: ", date);

var template = document.getElementsByID("3daysTemplate");
var clone1 = template.contentEditable.cloneNode(true); // crea una copia del template
console.log(clone1);
var table = document.getElementById("3daysBody");
