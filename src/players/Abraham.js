import React from "react";
import photo2 from '../img/abraham.jpg';
import spotify from '../img/Spotify_Logo_RGB_Green.png';

function Abraham() { 
  return (
    <div className="Player" id="Abraham">
      <div className="PlayerName">
        <h1>Abraham Toro</h1>
    </div>


    <div className="PlayerPhoto">
    <img src={photo2} alt="AbrahamPhoto" />
    </div>

    <div className="column">
      <div className="PlayerSong">
        <h5>Title: Subelo </h5>
        <h5>Artist: Anuel AA, Jhay Cortez, Myke Towers</h5>
        </div>
        <a href="https://open.spotify.com/track/3fHEwAssCgM4wJYdjT5Ch0?si=9ac756aec66d4fa3" >
        <img src={spotify} alt="spotifyicon" height="100"  style={{vertical: "middle" }} />
        </a>
    </div>

  </div>
  )}

  export default Abraham