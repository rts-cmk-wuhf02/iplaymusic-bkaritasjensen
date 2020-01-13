"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var featured = document.querySelectorByID("classList");
  fetch("json/featured.json").then(function (response) {
    return response.json();
  }).then(function (result) {
    console.log(result);
  });
});