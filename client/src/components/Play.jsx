import React from 'react';

import './App.css';
import { useState, useEffect } from 'react';

// functions
import { getSong } from '../functions/play';

const Play = () => {
    const [song,setSong] = useState("Loading...");
    useEffect(() => {
      getSong().then((res) => {
        let audio = <audio controls>
        <source src={JSON.parse(res).soundcloudTrack.audio[0].url}/>
       </audio>
        setSong(audio);
      })
      .catch((err) =>  console.log(err))
    }, [])
    return(
        <div className="App">
       {song}
        </div>
    );
   
}

export default Play;