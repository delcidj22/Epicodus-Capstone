import React from "react";
import photo2 from '../img/cal.jpg';
import spotify from '../img/Spotify_Logo_RGB_Green.png';

function Cal() { 
  return (
    <div className="Player" id="Cal">
      <div className="PlayerName">
        <h1>Cal Raleigh</h1>
    </div>


    <div className="PlayerPhoto">
    <img src={photo2} alt="CalPhoto" />
    </div>

    <div className="column">
      <div className="PlayerSong">
        <h5>Title: Sleeping on the Blacktop </h5>
        <h5>Artist: Colter Wall </h5>
        </div>
        <a href="https://open.spotify.com/track/3Ozx6IrGdoQyAworJzvBDE?si=485f18c880ef4733" >
        <img src={spotify} alt="spotifyicon" height="100"  style={{vertical: "middle" }} />
        </a>
    </div>

  </div>
  )}

  export default Cal