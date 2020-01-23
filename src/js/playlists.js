
document.addEventListener("DOMContentLoaded", () =>{

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
			//console.log(result)
			//console.log(result.playlists) 
			result.playlists.items.forEach(element => {
				//console.log(element) 
				//console.log(element)
				
				// Template
				const containerImage = document.querySelector(".swiper-wrapper");
				const templateImage = document.getElementById("playlists-images");
				
				const cloneImage = templateImage.content.cloneNode(true);
				
				cloneImage.querySelector(".swiper-slide").style = "background-image:url("+element.images[0].url+")";
				
				
				// Tilføjer clone
				containerImage.appendChild(cloneImage);
				
			})
		}
	});

	///////////////////////////////////// TRACKS API
	let playlistsTracksURL = "https://api.spotify.com/v1/playlists/37i9dQZF1DWVRSukIED0e9/tracks";

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
			//console.log(result)
			// "https://api.spotify.com/v1/artists/"
			//console.log("Henter Tracks - artist", result.items[0].track.artists[0].name)//Stivejen til artist
			//console.log("Henter Tracks - name", result.items[0].track.name)//Stivejen til sang titel
			result.items.forEach(element => {

				const containerPlaylist = document.querySelector(".playlists__playlist");
				const templatePlaylist = document.getElementById("playlists-playlists");
				const clonePlaylist = templatePlaylist.content.cloneNode(true);
	
				clonePlaylist.querySelector(".albumDetails__albumsListAlbumName").innerText = element.track.name;

				containerPlaylist.appendChild(clonePlaylist);
					
					/* element.track.forEach(element =>{
						
						const containerPlaylist = document.querySelector(".playlists__playlist");
						const templatePlaylist = document.getElementById("playlists-playlists");
						const clonePlaylist = templatePlaylist.content.cloneNode(true);
						
						clonePlaylist.querySelector(".albumDetails__albumsListAlbumArtist").innerText = element.name;
						
						containerPlaylist.appendChild(clonePlaylist); 
					}) */
					/* }) */
			})
		}
	})




/* 	///////////////////////////// VISER TRACKS FRA DET VALGTE PLAYLISTE //////////////////// 

	//Hvis det midste playliste er vist
	let Image = querySelector(".swiper-slide");

	if(Image === show){

	}
	
	//Skal den vise playlistens titel
	//Skal den vise albummets tracks */

});