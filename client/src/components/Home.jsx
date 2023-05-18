import React from 'react';
import { useRef } from 'react';

// functions

const Home = () => {
  return(
  <>
      <section class="canciones">
        <h2>Escuchados Recientemente</h2>
        <div class="album-container">
          <div class="album">
            <img
              src={require("../media/Inicio/Cards/1.jpg")}
              alt="Carátula del álbum 1"
            />
            <h3>Divine Femenine - Mac Miller</h3>
          </div>
          <div class="album">
            <img
              src={require("../media/Inicio/Cards/2.jpg")}
              alt="Carátula del álbum 2"
            />
            <h3>The Melodic Blue - Baby Keem</h3>
          </div>
          <div class="album">
            <img
              src={require("../media/Inicio/Cards/3.jpg")}
              alt="Carátula del álbum 3"
            />
            <h3>DAMN.- Kendrick Lamar</h3>
          </div>
          <div class="album">
            <img
              src={require("../media/Inicio/Cards/4.jpg")}
              alt="Carátula del álbum 4"
            />
            <h3>honestly nevermind - Drake</h3>
          </div>
          <div class="album">
            <img
              src={require("../media/Inicio/Cards/5.jpg")}
              alt="Carátula del álbum 5"
            />
            <h3>Lover - Taylor Swift</h3>
          </div>
          <div class="album">
            <img
              src={require("../media/Inicio/Cards/6.jpg")}
              alt="Carátula del álbum 6"
            />
            <h3>S.O.S - SZA</h3>
          </div>
        </div>
      </section>

      <section class="reels">
        <h2>Reels</h2>
        <div class="reels-container">
          <div class="reel">
            <video src={require("../media/reel/short1.mp4")} autoplay loop muted></video>
            <h3>Divine Femenine - Mac Miller</h3>
          </div>
          <div class="reel">
            <video src={require("../media/reel/short2.mp4")} autoplay loop muted></video>
            <h3>The Melodic Blue - Baby Keem</h3>
          </div>
          <div class="reel">
            <video src={require("../media/reel/short3.mp4")} autoplay loop muted></video>
            <h3>DAMN.- Kendrick Lamar</h3>
          </div>
          <div class="reel">
            <video src={require("../media/reel/short4.mp4")} autoplay loop muted></video>
            <h3>honestly nevermind - Drake</h3>
          </div>
          <div class="reel">
            <video src={require("../media/reel/short5.mp4")} autoplay loop muted></video>
            <h3>Lover - Taylor Swift</h3>
          </div>
          <div class="reel">
            <video src={require("../media/reel/short6.mp4")} autoplay loop muted></video>
            <h3>S.O.S - SZA</h3>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;