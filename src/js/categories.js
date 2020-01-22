
////////////////////////HENTER NY TOKEN//////////////////////////
document.addEventListener("DOMContentLoaded", () =>{

	fetch("https://api.spotify.com/v1/browse/categories", {
		method: "GET",
		headers: {
			"Authorization": 'Bearer ' + sessionStorage.token
		}
	})
	.then((response) => response.json())
	.then((result) => {
		if (result.error === 401){
			getToken();
		}else{
			/* console.log(result)
			console.log(result.categories.items) */
			result.categories.items.forEach(element => {
				//console.log(element)
				console.log(element.name)
				//Template
				const container = document.getElementById("dropdown");
				const template = document.getElementById("categories-template");
				const clone = template.content.cloneNode(true);
				clone.querySelector(".categories__title").innerText = element.name;
				/*clone.querySelector("").innerText = element.price;
				clone.querySelector("").href = `/product/?sku=${element.sku}`;  */
				// Tilføjer clone
				container.appendChild(clone);
			});
		
		
		}
	})
});