// api url
const json_url =
	"./markers.json";

// Defining async function
async function getapi(json) {
	
	// Storing response
	const response = await fetch(json);
	
	// Storing data in form of JSON
	var data = response;
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(json_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>Name</th>
		<th>Position</th>
		<th>Category</th>
		<th>Sustainable</th>
        <th>Favourite</th>
        <th>Description</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data.list) {
		tab += `<tr>
	<td>${r.Title} </td>
	<td>${r.Position}</td>
	<td>${r.Category}</td>
	<td>${r.Sustainable}</td>
    <td>${r.Favourite}</td>
    <td>${r.Description}</td>		
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("events").innerHTML = tab;
}

