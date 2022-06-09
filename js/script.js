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
  document.querySelector("#markers").innerText = JSON.stringify(result);
  data = result;
}

async function filterDataPers(persName){
  const elements = document.getElementsByClassName('markers-box');
  console.log(elements);
  elements[0].style.display = 'block';
  data = await getData();
  queryItem = persName;
  var result = data.events.filter(a => a.person === queryItem);
  console.log(result);
  document.querySelector("#markers").innerText = JSON.stringify(result);
  data = result;
}

function clickFunction(elName, catName){
  if(elName == "side-one"){
    const elements = document.getElementsByClassName(elName);
    console.log(elements);
    elements[0].style.display = 'none';
    
    const elementTwo = document.getElementsByClassName('slide-two');
    console.log(elementTwo);
    elementTwo[0].style.display = 'block';
  }

  if(elName == "side-two"){
      const elements = document.getElementsByClassName(elName);
      console.log(elements);
      elements[0].style.display = 'none';
    
      filterDataPers(persName);
  }
}
