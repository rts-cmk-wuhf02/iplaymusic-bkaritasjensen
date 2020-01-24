document.addEventListener("FDOMContentLoaded", () =>{

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