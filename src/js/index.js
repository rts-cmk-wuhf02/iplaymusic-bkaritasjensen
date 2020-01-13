document.addEventListener("DOMContentLoaded", () =>{

	let featured = document.querySelectorByID("classList");

	fetch("json/featured.json")
		.then((response) => response.json())
		.then((result) =>{
			console.log(result)

		})
	

});