import React from "react";
import photo2 from '../img/jesse.jpg';
import spotify from '../img/Spotify_Logo_RGB_Green.png';

function Jesse() { 
  return (
    <div className="Player" id="Jesse">
      <div className="PlayerName">
        <h1>Jesse Winker</h1>
    </div>


    <div className="PlayerPhoto">
    <img src={photo2} alt="JessePhoto" />
    </div>

    <div className="column">
      <div className="PlayerSong">
        <h5>Title: Fair Trade </h5>
        <h5>Artist: Drake</h5>
        </div>
        <a href="https://open.spotify.com/track/40iJIUlhi6renaREYGeIDS?si=f3c658490e2645c4" >
        <img src={spotify} alt="spotifyicon" height="100"  style={{vertical: "middle" }} />
        </a>
    </div>

  </div>
  )}

  export default Jesse