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
      //console.log(result.playlists.items) 
      result.playlists.items.forEach(function (element) {
        //console.log(element) 
        console.log(element.name); // Template

        var container = document.querySelector(".swiper-wrapper");
        var template = document.getElementById("playlists-images");
        var clone = template.content.cloneNode(true);
        clone.querySelector(".swiper-slide").style = "background-image:url(" + element.images[0].url + ")";
        clone.querySelector(".playlists__playlistsText").innerHTML = element.name; // Tilføjer clone

        container.appendChild(clone);
      });
    }
  });
});