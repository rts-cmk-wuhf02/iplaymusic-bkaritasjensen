"use strict";

////////////////////////HENTER NY TOKEN//////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.spotify.com/v1/browse/featured-playlists", {
    method: "GET",
    headers: {
      "Authorization": 'Bearer ' + sessionStorage.token
    }
  }).then(function (response) {
    return response.json();
  }).then(function (result) {
    if (result.error === 401) {
      getToken();
    } else {
      //console.log(result)
      //console.log(result.playlists) 
      result.playlists.items.forEach(function (element) {
        //console.log(element) 
        console.log(element); // Template

        var containerImage = document.querySelector(".swiper-wrapper");
        var templateImage = document.getElementById("playlists-images");
        var containerText = document.querySelector(".playlists__headerTitle");
        var templateText = document.getElementById("playlists-playlistsTitle");
        var cloneImage = templateImage.content.cloneNode(true);
        var cloneText = templateText.content.cloneNode(true);
        cloneImage.querySelector(".swiper-slide").style = "background-image:url(" + element.images[0].url + ")";
        cloneText.querySelector(".playlists__playlistsText").innerHTML = element.name; // Tilføjer clone

        containerImage.appendChild(cloneImage);
        containerText.appendChild(cloneText);
      });
    }
  });
});