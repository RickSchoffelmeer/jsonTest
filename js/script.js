function GetData(){
  fetch('./json/markers.json')
    			.then(response => response.json())
    			.then(data => {
            console.log(data)
            document.querySelector("#markers").innerText = data.events[1].name
    			})
}


GetData();
