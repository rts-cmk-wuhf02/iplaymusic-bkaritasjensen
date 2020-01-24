"use strict";

document.addEventListener("FDOMContentLoaded", function () {
  ////////////////////////////// FEATURED ALBUMS /////////////////////////////////
  var featuredAlbumsURL = "https://api.spotify.com/v1/albums?ids=41MnTivkwTO3UUJ8DrqEJJ%2C6JWc4iAiJ9FjyK0B59ABb4%2C6UXCm6bOO4gFlDQZV5yL37";
  fetch(featuredAlbumsURL, {
    method: "GET",
    headers: {
      "Authorization": 'Bearer ' + sessionStorage.token
    }
  }).then(function (response) {
    return response.json();
  }).then(function (result) {
    //console.log(result)
    if (result.error) {
      getToken();
    } else {
      result.albums.forEach(function (element) {
        var containerAlbumsImage = document.querySelector(".featuredAlbums-cardListImage");
        var templateAlbumsImage = document.getElementById("featuredAlbums-imagesTemplate");
        var cloneAlbumsImage = templateAlbumsImage.content.cloneNode(true);
        cloneAlbumsImage.querySelector(".featuredAlbums__images").src = element.images[0].url;
        containerAlbumsImage.appendChild(cloneAlbumsImage);
      });
    }

    if (result.error) {
      getToken();
    } else {
      result.albums.forEach(function (element) {
        var containerAlbumsList = document.querySelector(".featuredAlbums_cardListList");
        var templateAlbumsList = document.getElementById("featuredAlbums-listsTemplate");
        var cloneAlbumsList = templateAlbumsList.content.cloneNode(true);
        cloneAlbumsList.querySelector(".featuresAlbums__imageAlbumList").src = element.images[0].url;
        cloneAlbumsList.querySelector(".featuredAlbums__albumsListAlbumName").innerText = element.name;
        cloneAlbumsList.querySelector(".featuredAlbums__albumListSongNr").innerText = element.total_tracks;
        containerAlbumsList.appendChild(cloneAlbumsList);
      });
    }
  });
});