"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //////////////////////////////// CATEGORI //////////////////////////////////
  var categoriesURL = "https://api.spotify.com/v1/browse/categories";
  fetch(categoriesURL, {
    method: "GET",
    headers: {
      "Authorization": 'Bearer ' + sessionStorage.token
    }
  }).then(function (response) {
    return response.json();
  }).then(function (result) {
    if (result.error) {
      getToken(); //console.log(result.error)
    } else {
      //console.log(result)
      //console.log(result.categories.items) 
      result.categories.items.forEach(function (element) {
        //console.log(element)
        //console.log(element.name)
        //Template
        var containerCategories = document.getElementById("dropdown");
        var templateCategories = document.getElementById("categories-template");
        var cloneCategories = templateCategories.content.cloneNode(true);
        cloneCategories.querySelector(".categories__title").innerText = element.name; // Tilføjer clone

        containerCategories.appendChild(cloneCategories);
      });
    }
  }); //////////////////////////////// FEATURED //////////////////////////////////

  var featuredURL = "https://api.spotify.com/v1/browse/featured-playlists";
  fetch(featuredURL, {
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
      //console.log(result.playlists.items) 
      result.playlists.items.forEach(function (element) {
        //console.log(element) 
        //console.log("HENTER BILLEDER", element.images[0].url)
        //Template
        var containerFeatured = document.getElementById("featured-cardList");
        var templateFeatured = document.getElementById("featured-template");
        var cloneFeatured = templateFeatured.content.cloneNode(true);
        clone.querySelector(".featured__images").src = element.images[0].url;
        /*clone.querySelector("").href = `/product/?sku=${element.sku}`;  */
        // Tilføjer clone

        containerFeatured.appendChild(cloneFeatured);
      });
    }
  }); //////////////////////////////// PLAYLISTS //////////////////////////////////

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
    }
  }); ///////////////////////////////////// TRACKS API

  var playlistsTracksURL = "https://api.spotify.com/v1/playlists/37i9dQZF1DWVRSukIED0e9/tracks";
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
      console.log(result); // "https://api.spotify.com/v1/artists/"

      console.log("Henter Tracks - artist", result.items[0].track.artists[0].name); //Stivejen til artist
      //console.log("Henter Tracks - name", result.items[0].track.name)//Stivejen til sang titel

      result.items.forEach(function (element) {
        var containerPlaylist = document.querySelector(".playlists__playlist");
        var templatePlaylist = document.getElementById("playlists-playlists");
        var clonePlaylist = templatePlaylist.content.cloneNode(true);
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
      });
    }
  }); ////////////////////////////// FEATURED ALBUMS /////////////////////////////////

  var featuredAlbumsURL = "https://api.spotify.com/v1/albums?ids=41MnTivkwTO3UUJ8DrqEJJ%2C6JWc4iAiJ9FjyK0B59ABb4%2C6UXCm6bOO4gFlDQZV5yL37";
  fetch(featuredAlbumsURL, {
    method: "GET",
    headers: {
      "Authorization": 'Bearer ' + sessionStorage.token
    }
  }).then(function (response) {
    return response.json();
  }).then(function (result) {
    console.log(result);

    if (result.error) {
      getToken();
    } else {}
  });
});