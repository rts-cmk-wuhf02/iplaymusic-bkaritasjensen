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
  /* 		////////////////////////// TILFØJER SUBCATEGORIES /////////////////////////////////////
  var subCategoriesID = element.id;
  
  fetch(`https://api.spotify.com/v1/browse/categories/${subCategoriesID}/playlists`, {
  	method: "GET",
  	headers: {
  		"Authorization": 'Bearer ' + sessionStorage.token
  	}
  })
  .then((response) => response.json())
  .then((result) => {
  	if (result.error && result.error.status === 401){
  		getToken();
  	}else{
  		result.playlists.items.forEach(element => {
  			const templateSubcategories = document.getElementById("subcategories-template").content.cloneNode(true);
  			const containerSubcategories = templateSubcategories.querySelector("li a"); true
  			
  			containerSubcategories.innerText = element.name;
  			
  			containerCategoriesUl.appendChild(templateSubcategories);
  		});
  		containerCategoriesLi.appendChild(templateCategories);
  	}
  }) */
});