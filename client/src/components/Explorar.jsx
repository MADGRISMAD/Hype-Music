import React from 'react';
import {useState, useRef, useEffect } from 'react';

// functions

const Explorar = () => {
    var previousButton;
    var nextButton;
    var playPauseButton;
    var playGif;
    var previousGif;
    var nextGif;
    useEffect(() => {
        // window.addEventListener("scroll", function () {
        //     var navbar = document.getElementById("navbar");
        //     if (window.scrollY > 0) {
        //       navbar.classList.add("scrolled");
        //     } else {
        //       navbar.classList.remove("scrolled");
        //     }
        //   });
          // Obtener los botones y los elementos <img> de los GIFs
          playPauseButton = document.getElementById("play-pause-button");
          previousButton = document.getElementById("previous-button");
          nextButton = document.getElementById("next-button");
          playGif = document.querySelector(
            '.navbar-player img[alt="Reproducir"]'
          );
          previousGif = document.querySelector(
            '.navbar-player img[alt="Anterior"]'
          );
          nextGif = document.querySelector(
            '.navbar-player img[alt="Siguiente"]'
          );
    
          // Agregar un event listener a los botones
        //   playPauseButton.addEventListener("click", togglePlayPause);
        //   previousButton.addEventListener("click", playPrevious);
        //   nextButton.addEventListener("click", playNext);
    
          // Función para alternar la reproducción y pausa del GIF
          function togglePlayPause() {
            if (playGif.classList.contains("playing")) {
              playGif.classList.remove("playing");
            } else {
              playGif.classList.add("playing");
            }
          }
    
          // Funciones para reproducir el GIF anterior y siguiente
          function playPrevious() {
            previousGif.classList.add("playing");
          }
    
          function playNext() {
            nextGif.classList.add("playing");
          }
    },[]);
  return(
    <div className="contenedor">
    <img src={require("../media/explorar/imagines/foto2.jpg")} alt="" />
    <img src={require("../media/explorar/imagines/foto1.jpg")} alt="" />
    <video autoplay loop muted>
      <source src={require("../media/explorar/short2.mp4")} type="video/mp4" />
    </video>
    <img src={require("../media/explorar/imagines/foto3.jpg")} alt="" />
    <video autoplay loop muted>
      <source src={require("../media/explorar/short3.mp4")}type="video/mp4" />
    </video>
    <img src={require("../media/explorar/imagines/foto4.jpg")} alt="" />
    <img src={require("../media/explorar/imagines/foto5.jpg")} alt="" />
    <video autoplay loop muted>
      <source src={require("../media/explorar/short4.mp4")}type="video/mp4" />
    </video>
    <img src={require("../media/explorar/imagines/foto6.jpg")} alt="" />
    <img src={require("../media/explorar/imagines/foto7.jpg")} alt="" />
    <video autoplay loop muted>
      <source src={require("../media/explorar/short5.mp4")}type="video/mp4" />
    </video>
    <video autoplay loop muted>
      <source src={require("../media/explorar/short6.mp4")} type="video/mp4" />
    </video>
    <img src={require("../media/explorar/imagines/foto8.jpg")} alt="" />
    <img src={require("../media/explorar/imagines/foto9.jpg")} alt="" />
    <img src={require("../media/explorar/imagines/foto10.jpg")} alt="" />
    <video autoplay loop muted>
      <source src={require("../media/explorar/short7.mp4")} type="video/mp4" />
    </video>
    <video autoplay loop muted>
      <source src={require("../media/explorar/short8.mp4")} type="video/mp4" />
    </video>
    <img src={require("../media/explorar/imagines/foto11.jpg")} alt="" />
    <img src={require("../media/explorar/imagines/foto12.jpg")} alt="" />
    <img src={require("../media/explorar/imagines/foto13.jpg")} alt="" />
    
  </div>
  );
}
export default Explorar;