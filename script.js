// your code here
function changeHeader(){
	var inputName = document.getElementById("name").value.trim();
	var inputYear = document.getElementById('year').value.trim();

	const params=new URLSearchParams();
	var baseUrl = "https://localhost:8080/";
	
	if (inputName) params.append("name", inputName);
	if (inputYear) params.append("year", inputYear);

	
	let finalUrl = baseUrl;
	if([...params].length>0){
		finalUrl += "?" + params.toString();
	}
	
    document.getElementById('url').textContent = finalUrl;
	// Redirect to the new URL
}