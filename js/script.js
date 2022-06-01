async function getData(){
  const response = await fetch('./json/markers.json');
  return response.json();
}

async function filterData(){
  const data = await getData();
  const result = data.filter(a => a.category == "Cultuur");
  console.log(result);
  document.querySelector("#markers").innerText = result
}

filterData();
