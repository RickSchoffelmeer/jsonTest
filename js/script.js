function GetData(){
  fetch('./json/markers.json')
    			.then(response => response.json())
    			.then(data => {
            const line = data.events
            const result = line.filter(category => category == "Cultuur")
            document.querySelector("#markers").innerText = result
            console.log(result)
    			})
}


GetData();
