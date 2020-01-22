
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
		if (result.error === 401){
			getToken();
		}else{
			//console.log(result)
			//console.log(result.playlists.items) 
			result.playlists.items.forEach(element => {
				//console.log(element) 
				console.log(element.name)
				
				// Template
				const container = document.querySelector(".swiper-wrapper");
				const template = document.getElementById("playlists-images");

				const clone = template.content.cloneNode(true);

				clone.querySelector(".swiper-slide").style = "background-image:url("+element.images[0].url+")";
				clone.querySelector(".playlists__playlistsText").innerHTML = element.name;
				
				// Tilføjer clone
				container.appendChild(clone);
			}); 
		}
	})
});