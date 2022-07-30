import React from "react";
import photo2 from 'src/img/juliorodriguez.jpg';
import spotify from 'src/img/Spotify_Logo_RGB_Green.png';

function Julio() { 
  return (
    <div className="JulioPage">
    <h1>Julio Rodriguez</h1>


    <div class="jrod">
    <img src={photo2} alt="JulioPhoto" />
    </div>

    <div class="column">
      <div class="song">
        <h5>Title: Married to the Game</h5>
        <h5>Artist: Future</h5>
      </div>
      <a href="https://open.spotify.com/track/4Kup1kDTLoJaUMgpGFPqau?si=d45ec67102a647e0" />
      <img src={spotify} alt="spotifyicon" height="180" style="vertical-align:middle" />
    </div>

  </div>
  )}

  export default Julio