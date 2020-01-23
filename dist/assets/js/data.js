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
        console.log(element.name); //Template

        var container = document.getElementById("dropdown");
        var template = document.getElementById("categories-template");
        var clone = template.content.cloneNode(true);
        clone.querySelector(".categories__title").innerText = element.name; // Tilføjer clone

        container.appendChild(clone);
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