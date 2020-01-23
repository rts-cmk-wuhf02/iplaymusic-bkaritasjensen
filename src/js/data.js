
document.addEventListener("DOMContentLoaded", () =>{
	//////////////////////////////// CATEGORI //////////////////////////////////
	let categoriesURL = "https://api.spotify.com/v1/browse/categories";

	fetch(categoriesURL, {
		method: "GET",
		headers: {
			"Authorization": 'Bearer ' + sessionStorage.token
		}
	})
	.then((response) => response.json())
	.then((result) => {
		if (result.error){
			getToken();
			//console.log(result.error)
		}else{
			//console.log(result)
			//console.log(result.categories.items) 
			result.categories.items.forEach(element => {
				//console.log(element)
				//console.log(element.name)
				//Template
				const container = document.getElementById("dropdown");
				const template = document.getElementById("categories-template");
				const clone = template.content.cloneNode(true);
				clone.querySelector(".categories__title").innerText = element.name;
				 
				// Tilføjer clone
				container.appendChild(clone);
			});
		
		
		}
	});

	//////////////////////////////// FEATURED //////////////////////////////////

	let featuredURL = "https://api.spotify.com/v1/browse/featured-playlists";

	fetch(featuredURL, {
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
				//console.log("HENTER BILLEDER", element.images[0].url)
				
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
	});

	//////////////////////////////// PLAYLISTS //////////////////////////////////

	let playlistsURL = "https://api.spotify.com/v1/browse/featured-playlists";

	fetch(playlistsURL, {
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
			console.log(result)
			//console.log(result.playlists) 
			result.playlists.items.forEach(element => {
				//console.log(element) 
				//console.log(element)
				
				// Template
				const containerImage = document.querySelector(".swiper-wrapper");
				const templateImage = document.getElementById("playlists-images");
				const containerText = document.querySelector(".playlists__headerTitle");
				const templateText = document.getElementById("playlists-playlistsTitle");

				const cloneImage = templateImage.content.cloneNode(true);
				const cloneText = templateText.content.cloneNode(true);

				cloneImage.querySelector(".swiper-slide").style = "background-image:url("+element.images[0].url+")";
				cloneText.querySelector(".playlists__playlistsText").innerHTML = element.name;
				
				// Tilføjer clone
				containerImage.appendChild(cloneImage);
				containerText.appendChild(cloneText);
			})
		}
	});

	let playlistsTracksURL = "https://api.spotify.com/v1/playlists/21THa8j9TaSGuXYNBU5tsC/tracks";

	fetch(playlistsTracksURL, {
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
			console.log("Henter Tracks", result)
		}


	})


});