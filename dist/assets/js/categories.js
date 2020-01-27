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
      getToken();
    } else {
      //console.log(result)
      //console.log(result.categories.items) 
      result.categories.items.forEach(function (element) {
        console.log(element); //console.log(element.name)
        //Template

        var containerCategories = document.getElementById("dropdown");
        var templateCategories = document.getElementById("categories-template");
        var cloneCategories = templateCategories.content.cloneNode(true);
        cloneCategories.querySelector(".categories__title").innerText = element.name; // Tilføjer clone

        containerCategories.appendChild(cloneCategories);
      });
    }
  });
  /* // prøver finde underkategorierne 
  var subcategories = `https://api.spotify.com/v1/browse/categories/wellness/playlists`;
  console.log(subcategories) */
});