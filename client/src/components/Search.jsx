import React from 'react';

import { useState, useEffect } from 'react';

// functions
import { getIndex, getSearch } from '../functions/search';

const Search = () => {
    const [data,setData] = useState("Hola Mundo");
    const [search,setSearch] = useState("Songs");
    useEffect(() => {
      getIndex().then((res) => {
        setData(res.message);
      })
      .catch((err) =>  console.log(err))
    }, [])
  
    useEffect(() => {
      getSearch().then((res) => {
        let array = [];
        for(let i = 0; i < JSON.parse(res).tracks.items.length; i++){
          let song = JSON.parse(res).tracks.items[i].data;
          let duration = String(Math.floor(song.duration.totalMilliseconds/60000)) + ":" + String(Math.trunc(song.duration.totalMilliseconds/6000))
          let href = "http://localhost:3000/play?song=" + song.id;
          let object = <a href={href}>
          <div class="card">
          <img src={song.albumOfTrack.coverArt.sources[0].url} alt="Avatar" styles="width:100%;"/>
          <div class="container">
            <h3><b>{song.name}</b></h3>
            <p>{song.albumOfTrack.name}</p>
            <strong><p>{song.artists.items[0].profile.name}</p></strong>
            <p>{duration}</p>
          </div>
        </div>
        </a>;
          array.push(object);
        }
        setSearch(JSON.parse(JSON.stringify(array)));
        setSearch(array);
      })
      .catch((err) =>  console.log(err))
    }, []);
    return(
        <div className="App">
        <h1>{data}</h1>
        {search}
        </div>
    );
   
}

export default Search;
