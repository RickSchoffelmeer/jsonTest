var queryItem;
var data;

async function getData(){
  const response = await fetch('./json/markers.json');
  return response.json();
}

async function filterDataCat(catName){
  data = await getData();
  queryItem = catName;
  var result = data.events.filter(a => a.category === queryItem);
  console.log(result);
  data = result;
}

async function filterDataPers(catName){
  const elements = document.getElementsByClassName('markers-box');
  console.log(elements);
  elements[0].style.display = 'block';

  queryItem = catName;
  var result = data.filter(a => a.person.includes(queryItem));
  console.log(result);
  const myJSON = JSON.stringify(result);
  document.getElementById("markers").innerHTML = myJSON;
  data = result;
}

function clickFunction(elName, catName){
  if(elName === "slide-one"){
    const elements = document.getElementsByClassName(elName);
    console.log(elements);
    elements[0].style.display = 'none';

    filterDataCat(catName);
    
    const elementTwo = document.getElementsByClassName('slide-two');
    console.log(elementTwo);
    elementTwo[0].style.display = 'block';
  }

  if(elName === "slide-two"){
    const elements = document.getElementsByClassName(elName);
    console.log(elements);
    elements[0].style.display = 'none';
    
    filterDataPers(catName);
  }
}
