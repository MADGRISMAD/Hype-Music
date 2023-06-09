import React, { useEffect } from 'react';
import {useState, useRef } from 'react';

const Sidebar = () => {
  var body, sidebar, toggle, searchBtn, modeSwitch, modeText;
    useEffect(() => {
      body = document.querySelector("body");
      sidebar = body.querySelector("nav");
      toggle = body.querySelector(".toggle");
      searchBtn = body.querySelector(".search-box");
      modeSwitch = body.querySelector(".toggle-switch");
      modeText = body.querySelector(".mode-text");
      var double = false;
      toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
      });
      searchBtn.addEventListener("click", () => {
        sidebar.classList.remove("close");
      });
      modeSwitch.addEventListener("click", () => {
        body.classList.toggle("dark");
      
        if (body.classList.contains("dark")) {
          modeText.innerText = "Light mode";
        } else {
          modeText.innerText = "Dark mode";
        }
      });
    }, []);
//   modeSwitch.addEventListener("click", () => {
//     body.classList.toggle("dark");

//     if (body.classList.contains("dark")) {
//       modeText.innerText = "Light mode";
//     } else {
//       modeText.innerText = "Dark mode";
//     }
//   });

    return(
        <>
    <nav class="sidebar close">
      <header>
        <div class="image-text">
          <span class="image">
            <img src={require("./logo.png")} alt="" />
          </span>
        </div>
        <i class="bx bx-chevron-right toggle"></i>
      </header>
      <div class="menu-bar">
        <div class="menu">
          <li class="search-box">
            <i class="bx bx-search icon"></i>
            <input id="inputSearch" type="text" placeholder="Buscar..." />
          </li>
          <ul class="menu-links">
            <li class="nav-link">
              <a href="http://localhost:3000/">
                <i class="bx bx-home-alt icon"></i>
                <span class="text nav-text">Inicio</span>
              </a>
            </li>
            <li class="nav-link">
              <a href="http://localhost:3000/descubrir">
                <i class="bx bx-bar-chart-alt-2 icon"></i>
                <span class="text nav-text">Descubrir</span>
              </a>
            </li>
            
          </ul>
        </div>
        <div class="audio-player">
          <div class = "audio-controls">
              <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="vertical feather feather-fast-forward"><polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon></svg>
              <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="vertical feather feather-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="vertical feather feather-rewind"><polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon></svg>
        </div>
          <div>
            
            <div id="posX"></div>
          </div>
        </div>
        <div class="bottom-content">
          <li class="">
            <a href="#">
              <i class="bx bx-log-out icon"></i>
              <span class="text nav-text">Salir</span>
            </a>
          </li>
          <li class="mode">
            <div class="sun-moon">
              <i class="bx bx-moon icon moon"></i>
              <i class="bx bx-sun icon sun"></i>
            </div>
            <span class="mode-text text">Modo Oscuro</span>
            <div class="toggle-switch">
              <span class="switch"></span>
            </div>
          </li>
        </div>
        </div>
    </nav>
  </>
    );
}

export default Sidebar;