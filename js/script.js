async function getData(){
  const response = await fetch('./json/markers.json');
  return response.json();
}

async function filterData(){
  const data = await getData();
  const queryItem = "Cultuur"
  const result = data.events.filter(a => a.category === queryItem);
  console.log(result);
  document.querySelector("#markers").innerText = result
}

filterData();
