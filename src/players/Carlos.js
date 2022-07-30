import React from "react";
import photo2 from '../img/carlos.jpg';
import spotify from '../img/Spotify_Logo_RGB_Green.png';

function Carlos() { 
  return (
    <div className="Player" id="Carlos">
      <div className="PlayerName">
        <h1>Carlos Santana</h1>
    </div>


    <div className="PlayerPhoto">
    <img src={photo2} alt="CarlosPhoto" />
    </div>

    <div className="column">
      <div className="PlayerSong">
        <h5>Title: Bandoleros </h5>
        <h5>Artist: Don Omar, Tego Calderon </h5>
        </div>
        <a href="https://open.spotify.com/track/4BxzNZpcm1j3JczZzGNe2k?si=5b513a40bcad4229" >
        <img src={spotify} alt="spotifyicon" height="100"  style={{vertical: "middle" }} />
        </a>
    </div>

  </div>
  )}

  export default Carlos