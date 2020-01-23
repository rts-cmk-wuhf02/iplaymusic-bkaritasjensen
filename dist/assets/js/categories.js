"use strict";

////////////////////////HENTER NY TOKEN//////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.spotify.com/v1/browse/categories", {
    method: "GET",
    headers: {
      "Authorization": 'Bearer ' + sessionStorage.token
    }
  }).then(function (response) {
    return response.json();
  }).then(function (result) {
    if (result.error) {
      getToken();
      console.log(result.error);
    } else {
      console.log(result);
      /* console.log(result.categories.items) 
      result.categories.items.forEach(element => {
      	//console.log(element)
      	console.log(element.name)
      	//Template
      	const container = document.getElementById("dropdown");
      	const template = document.getElementById("categories-template");
      	const clone = template.content.cloneNode(true);
      	clone.querySelector(".categories__title").innerText = element.name;
      	/*clone.querySelector("").innerText = element.price;
      	clone.querySelector("").href = `/product/?sku=${element.sku}`;  
      	// Tilføjer clone
      	container.appendChild(clone);
      }); */
    }
  });
});