
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
			//console.log(result.playlists) 
			result.playlists.items.forEach(element => {
				//console.log(element) 
				console.log(element)
				
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
			}); 
		}
	})
});