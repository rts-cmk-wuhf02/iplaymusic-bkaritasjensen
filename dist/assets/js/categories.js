"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //////////////////////////////// CATEGORI //////////////////////////////////
  var categoriesURL = "https://api.spotify.com/v1/browse/categories";
  var subcategoriesURL = "https://api.spotify.com/v1/browse/categories/workout/playlists";
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
      console.log(result);
      result.categories.items.forEach(function (element) {
        //console.log(element)
        //Template
        var containerCategories = document.getElementById("dropdown");
        var templateCategories = document.getElementById("categories-template");
        var cloneCategories = templateCategories.content.cloneNode(true);
        cloneCategories.querySelector(".categories__title").innerText = element.name; // Tilføjer clone

        containerCategories.appendChild(cloneCategories);
      });
    }
  });
  fetch(subcategoriesURL, {
    method: "GET",
    headers: {
      "Authorization": 'Bearer ' + sessionStorage.token
    }
  }).then(function (response) {
    return response.json();
  }).then(function (result) {
    console.log(result.playlists.items[0].name);

    if (result.error) {
      getToken();
    } else {
      result.playlists.items.forEach(function (element) {
        var containerSubcategories = document.querySelector(".subcategories__cardList");
        var templateSubcategories = document.getElementById("subcategories-template");
        var cloneSubcategories = templateSubcategories.content.cloneNode(true);
        cloneSubcategories.querySelector(".subcategories__text").innerText = element.name;
        containerSubcategories.appendChild(cloneSubcategories);
      });
    }
  });
});