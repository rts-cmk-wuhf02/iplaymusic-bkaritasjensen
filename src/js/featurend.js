

////////////////////////HENTER NY TOKEN//////////////////////////
document.addEventListener("DOMContentLoaded", () =>{

	fetch("https://api.spotify.com/v1/browse/featured-playlists", {
		method: "GET",
		headers: {
			"Authorization": 'Bearer ' + sessionStorage.token
		}
	})
	.then((response) => response.json())
	.then((result) => {
		if (result.error){
			getToken();
		}else{
			//console.log(result)
			//console.log(result.playlists.items) 
			result.playlists.items.forEach(element => {
				//console.log(element) 
				console.log("HENTER BILLEDER", element.images[0].url)
				
				//Template
				const container = document.getElementById("featured-cardList");
				const template = document.getElementById("featured-template");

				const clone = template.content.cloneNode(true);

				clone.querySelector(".featured__images").src = element.images[0].url;
				/*clone.querySelector("").href = `/product/?sku=${element.sku}`;  */
				
				// Tilføjer clone
				container.appendChild(clone);
			}); 
		}
	})
});