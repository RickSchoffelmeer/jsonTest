var queryItem;

async function getData(){
  const response = await fetch('./json/markers.json');
  return response.json();
}

async function filterData(){
  var data = await getData();
  queryItem = "Cultuur"
  var result = data.events.filter(a => a.category === queryItem);
  console.log(result);
  document.querySelector("#markers").innerText = JSON.stringify(result);
}

function clickFunction(element){
  element.style.display = 'none';
  document.querySelectorAll(".markers-box").style.display = 'inline-block';
  filterData();
}
