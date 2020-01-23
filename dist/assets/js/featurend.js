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
    if (result.error) {
      getToken();
    } else {
      //console.log(result)
      //console.log(result.playlists.items) 
      result.playlists.items.forEach(function (element) {
        //console.log(element) 
        console.log("HENTER BILLEDER", element.images[0].url); //Template

        var container = document.getElementById("featured-cardList");
        var template = document.getElementById("featured-template");
        var clone = template.content.cloneNode(true);
        clone.querySelector(".featured__images").src = element.images[0].url;
        /*clone.querySelector("").href = `/product/?sku=${element.sku}`;  */
        // Tilføjer clone

        container.appendChild(clone);
      });
    }
  });
});