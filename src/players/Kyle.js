import React from "react";
import photo2 from '../img/kyle.png';
import spotify from '../img/Spotify_Logo_RGB_Green.png';

function Kyle() { 
  return (
    <div className="Player" id="Kyle">
      <div className="PlayerName">
        <h1>Kyle Lewis</h1>
    </div>


    <div className="PngPhoto">
    <img src={photo2} alt="KylePhoto" />
    </div>

    <div className="column">
      <div className="PlayerSong">
        <h5>Title: Married to the Game</h5>
        <h5>Artist: Future</h5>
        </div>
        <a href="https://open.spotify.com/track/4Kup1kDTLoJaUMgpGFPqau?si=d45ec67102a647e0" >
        <img src={spotify} alt="spotifyicon" height="100"  style={{vertical: "middle" }} />
        </a>
    </div>

  </div>
  )}

  export default Kyle