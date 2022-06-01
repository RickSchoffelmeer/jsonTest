function GetData(){
  fetch('./json/markers.json')
    			.then(response => response.json())
    			.then(data => {
            const result = data.filter(({category}) => category === "Cultuur")
					  console.log(result)
      			document.querySelector("#markers").innerText = result
    			})
}


GetData();
