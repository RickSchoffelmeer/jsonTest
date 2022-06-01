async function getData(){
  var response = await fetch('./json/markers.json');
  return response.json();
}

async function filterData(){
  var data = await getData();
  var result = data.filter(a => a.category === "Cultuur");
  console.log(result);
  document.querySelector("#markers").innerText = result
}

filterData();
