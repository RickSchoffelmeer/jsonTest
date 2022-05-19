async function getData() {

    const requestURL = './json/markers.json';
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const markers = await response.json();

    return markers
  
  }

async function renderData() {
    let data = await getData()
    let el = document.getElementById('markers');
    el.innerHTML = data.events.name;
}

renderData();

