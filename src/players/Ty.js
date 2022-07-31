import React from "react";
import photo2 from '../img/ty.png';
import spotify from '../img/Spotify_Logo_RGB_Green.png';


function Ty() { 
  return (
    <div className="Player" id="Ty">
      <div className="PlayerName">
        <h1>Ty France</h1>
    </div>


    <div className="PngPhoto">
    <img src={photo2} alt="TyPhoto" />
    </div>

    <div className="column">
      <div className="PlayerSong">
        <h5>Title: Good Life</h5>
        <h5>Artist: Kanye West</h5>
        </div>
        <a href="https://open.spotify.com/track/4ZPdLEztrlZqbJkgHNw54L?si=b758ac8108e24dc9" >
        <img src={spotify} alt="spotifyicon" height="100"  style={{vertical: "middle" }} />
        </a>
    </div>

  </div>
  )}

  export default Ty