import React from "react";
import photo2 from '../img/julio.png';
import spotify from '../img/Spotify_Logo_RGB_Green.png';

function Julio() { 
  return (
    <div className="Player" id="Julio">
      <div className="PlayerName">
        <h1>Julio Rodriguez</h1>
    </div>


    <div className="PngPhoto">
    <img src={photo2} alt="JulioPhoto" />
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

  export default Julio