var queryItem;

async function getData(){
  const response = await fetch('./json/markers.json');
  return response.json();
}

async function filterData(catName){
  const elements = document.getElementsByClassName('markers-box');
  console.log(elements);
  elements[0].style.display = 'block';
  var data = await getData();
  queryItem = catName;
  var result = data.events.filter(a => a.category === queryItem);
  console.log(result);
  document.querySelector("#markers").innerText = JSON.stringify(result);
}

function clickFunction(elName, catName){
  const elements = document.getElementsByClassName(elName);
  console.log(elements);
  elements[0].style.display = 'none';
  filterData(catName);
}
