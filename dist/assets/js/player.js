"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //////////////////////////////// PLAYLISTS //////////////////////////////////
  var playlistsURL = "https://api.spotify.com/v1/playlists/37i9dQZF1DWXJfnUiYjUKT/tracks";
  fetch(playlistsURL, {
    method: "GET",
    headers: {
      "Authorization": 'Bearer ' + sessionStorage.token
    }
  }).then(function (response) {
    return response.json();
  }).then(function (result) {
    console.log(result.items[0].track.name); //HENTER SANG TITEL

    console.log(result.items[0].track.artists[0].name); //HENTER KUNSTNER NAVN

    console.log(result.items[0].track.album.images[0].url); //HENTER KUNSTNER IMAGE

    /* if (result.error){
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
    } */
  });
});