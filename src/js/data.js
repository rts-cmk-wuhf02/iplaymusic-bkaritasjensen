
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
				const containerCategories = document.getElementById("dropdown");
				const templateCategories = document.getElementById("categories-template");
				const cloneCategories = templateCategories.content.cloneNode(true);

				cloneCategories.querySelector(".categories__title").innerText = element.name;
				 
				// Tilføjer clone
				containerCategories.appendChild(cloneCategories);
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
				const containerFeatured = document.getElementById("featured-cardList");
				const templateFeatured = document.getElementById("featured-template");

				const cloneFeatured = templateFeatured.content.cloneNode(true);

				clone.querySelector(".featured__images").src = element.images[0].url;
				/*clone.querySelector("").href = `/product/?sku=${element.sku}`;  */
				
				// Tilføjer clone
				containerFeatured.appendChild(cloneFeatured);
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



	////////////////////////////// FEATURED ALBUMS /////////////////////////////////

	let featuredAlbumsURL = "https://api.spotify.com/v1/albums?ids=41MnTivkwTO3UUJ8DrqEJJ%2C6JWc4iAiJ9FjyK0B59ABb4%2C6UXCm6bOO4gFlDQZV5yL37";
	
	fetch(featuredAlbumsURL, {
		method: "GET",
		headers: {
			"Authorization": 'Bearer ' + sessionStorage.token
		}
	})
	.then((response) => response.json())
	.then((result) => {
		//console.log(result)
			if (result.error){
				getToken();
			}else{
				result.albums.forEach(element =>{
					console.log(element)
					const containerAlbumsImage = document.querySelector(".featuredAlbums-cardListImage");
					const templateAlbumsImage = document.getElementById("featuredAlbums-imagesTemplate");
					const cloneAlbumsImage = templateAlbumsImage.content.cloneNode(true);
	
					cloneAlbumsImage.querySelector(".featuredAlbums__images").src = element.images[0].url;

					containerAlbumsImage.appendChild(cloneAlbumsImage);

				})
			}
			
			if (result.error){
				getToken();
			}else{
				result.albums.forEach(element => {
					console.log("Henter Tracks - Album", element.total_tracks)//Stivejen til artist
					const containerAlbumsList = document.querySelector(".featuredAlbums_cardListList");
					const templateAlbumsList = document.getElementById("featuredAlbums-listsTemplate");
					const cloneAlbumsList = templateAlbumsList.content.cloneNode(true);
			
					cloneAlbumsList.querySelector(".featuresAlbums__imageAlbumList").src = element.images[0].url;
					cloneAlbumsList.querySelector(".featuredAlbums__albumsListAlbumName").innerText = element.name;
					cloneAlbumsList.querySelector(".featuredAlbums__albumListSongNr").innerText = element.total_tracks;

					containerAlbumsList.appendChild(cloneAlbumsList);
				})
			}
	})
});