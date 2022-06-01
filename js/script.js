async function getData() {
  
    await fetch("./json/markers.json")
    .then(response => {
      return response.json();
    })
    .then(jsondata => console.log(jsondata));
  
  }

//async function renderData() {
//    let data = await getData()
//    let el = document.getElementById('markers');
//    el.innerHTML = data.events;
//}

getData();

