import React from "react";
import photo2 from '../img/adam.png';
import spotify from '../img/Spotify_Logo_RGB_Green.png';

function Adam() { 
  return (
    <div className="Player" id="Adam">
      <div className="PlayerName">
        <h1>Adam Frazier</h1>
    </div>


    <div className="PngPhoto">
    <img src={photo2} alt="AdamPhoto" />
    </div>

    <div className="column">
      <div className="PlayerSong">
        <h5>Title: Pony </h5>
        <h5>Artist: Ginuwine </h5>
        </div>
        <a href="https://open.spotify.com/track/6mz1fBdKATx6qP4oP1I65G?si=cfb99023d3d04e02" >
        <img src={spotify} alt="spotifyicon" height="100"  style={{vertical: "middle" }} />
        </a>
    </div>

  </div>
  )}

  export default Adam