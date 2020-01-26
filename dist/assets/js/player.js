"use strict";

document.addEventListener("DOMContentLoaded", function () {
  ////////////////////////////////// PLAYER //////////////////////////////

  /* var { choosenTrackURL } = require ('/assets/js/playlists.js');  */
  fetch(choosenTrackURL, {
    method: "GET",
    headers: {
      "Authorization": 'Bearer ' + sessionStorage.token
    }
  }).then(function (response) {
    return response.json();
  }).then(function (result) {
    console.log(result);

    if (result.error) {
      getToken();
    } else {
      console.log(result);
      /* document.querySelector(".player__songInfoArtistName").innerText = result.items[0].track.name;
      document.querySelector(".player_songInfoArtist").innerText = element.track.artists[0].name;
      document.querySelector(".").src = element.track.album.images[0]; */
    }
  });
});