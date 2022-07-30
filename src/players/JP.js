import React from "react";
import photo2 from '../img/jptest.png';
import spotify from '../img/Spotify_Logo_RGB_Green.png';

function JP() { 
  return (
    <div className="Player" id="JP">
      <div className="PlayerName">
        <h1>JP Crawford</h1>
    </div>


    <div className="PngPhoto">
    <img src={photo2} alt="JpPhoto" />
    </div>

    <div className="column">
      <div className="PlayerSong">
        <h5>Title: Miss the Rage </h5>
        <h5>Artist: Trippie Redd, Playboi Carti</h5>
        </div>
        <a href="https://open.spotify.com/track/2BITQ360Knh6qNAOqR7Dyq?si=6ac98db5d35b46a3" >
        <img src={spotify} alt="spotifyicon" height="100"  style={{vertical: "middle" }} />
        </a>
    </div>

  </div>
  )}

  export default JP