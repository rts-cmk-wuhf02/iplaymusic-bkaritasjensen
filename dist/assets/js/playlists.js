"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //////////////////////////////// PLAYLISTS //////////////////////////////////
  var playlistsURL = "https://api.spotify.com/v1/browse/featured-playlists";
  fetch(playlistsURL, {
    method: "GET",
    headers: {
      "Authorization": 'Bearer ' + sessionStorage.token
    }
  }).then(function (response) {
    return response.json();
  }).then(function (result) {
    if (result.error) {
      getToken();
    } else {
      //console.log(result)
      //console.log(result.playlists) 
      result.playlists.items.forEach(function (element) {
        //console.log(element) 
        //console.log(element)
        // Template
        var containerImage = document.querySelector(".swiper-wrapper");
        var templateImage = document.getElementById("playlists-images");
        var cloneImage = templateImage.content.cloneNode(true);
        cloneImage.querySelector(".swiper-slide").style = "background-image:url(" + element.images[0].url + ")"; // Tilføjer clone

        containerImage.appendChild(cloneImage);
      });
    } ///////////////////////////////////// TRACKS API


    var playlistsTracksURL = "https://api.spotify.com/v1/browse/featured-playlists";
    fetch(playlistsTracksURL, {
      method: "GET",
      headers: {
        "Authorization": 'Bearer ' + sessionStorage.token
      }
    }).then(function (response) {
      return response.json();
    }).then(function (result) {
      if (result.error) {
        getToken();
      } else {
        // "https://api.spotify.com/v1/artists/"
        //console.log("Henter Tracks - artist", result.items[0].track.artists[0].name)//Stivejen til artist
        //console.log("Henter Tracks - name", result.items[0].track.name)//Stivejen til sang titel
        result.playlists.items.forEach(function (element) {
          //console.log(element)
          //console.log(element)
          var containerPlaylist = document.querySelector(".playlists__playlist");
          var templatePlaylist = document.getElementById("playlists-playlists");
          var clonePlaylist = templatePlaylist.content.cloneNode(true);
          var playlistID = element.tracks.href;
          playlistID.forEach(function (element) {
            console.log(element);
            clonePlaylist.querySelector(".albumDetails__albumsListAlbumName").innerText = element.tracks.href;
            clonePlaylist.querySelector(".playlists__playlistsLink").href = "/player/?id=".concat(element.track.id);
            /*clone.querySelector("").href = `/product/?sku=${element.sku}`;  */
          });
          containerPlaylist.appendChild(clonePlaylist);
          /* element.track.forEach(element =>{
          	
          	const containerPlaylist = document.querySelector(".playlists__playlist");
          	const templatePlaylist = document.getElementById("playlists-playlists");
          	const clonePlaylist = templatePlaylist.content.cloneNode(true);
          	
          	clonePlaylist.querySelector(".albumDetails__albumsListAlbumArtist").innerText = element.name;
          	
          	containerPlaylist.appendChild(clonePlaylist); 
          }) */

          /* }) */
        });
      }
    });
  });
  /* 	///////////////////////////// VISER TRACKS FRA DET VALGTE PLAYLISTE //////////////////// 
  
  	//Hvis det midste playliste er vist
  	let Image = querySelector(".swiper-slide");
  
  	if(Image === show){
  
  	}
  	
  	//Skal den vise playlistens titel
  	//Skal den vise albummets tracks */
});