import React from "react";
import photo2 from '../img/eugenio.jpg';
import spotify from '../img/Spotify_Logo_RGB_Green.png';

function Eugenio() { 
  return (
    <div className="Player" id="Julio">
      <div className="PlayerName">
        <h1>Eugenio Suarez</h1>
    </div>


    <div className="PlayerPhoto">
    <img src={photo2} alt="EugenioPhoto" />
    </div>

    <div className="column">
      <div className="PlayerSong">
        <h5>Title: Ameno Amapiano Remix (You Wanna Bamba) </h5>
        <h5>Artist: Goya Menor and Nektunez</h5>
        </div>
        <a href="https://open.spotify.com/track/4iwiYqzoLImJraKQ9Pf2I2?si=ed5c08b2f38946c0" >
        <img src={spotify} alt="spotifyicon" height="100"  style={{vertical: "middle" }} />
        </a>
    </div>

  </div>
  )}

  export default Eugenio