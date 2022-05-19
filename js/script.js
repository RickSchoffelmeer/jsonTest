async function getData() {
  
    const response = await fetch('./json/markers.json');
    const markers = await response.json();

    return markers
  
  }

async function renderData() {
    let data = await getData()
    let el = document.getElementById('markers');
    el.innerHTML = data.events;
}

renderData();

