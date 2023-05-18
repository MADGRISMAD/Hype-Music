import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Search from "./Search";
import Play from "./Play";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route>
            <Route exact path = "/search" element={<Search />}/>
            <Route exact path = "/play" element={<Play />}/>
          </Route>
          {/* <Route element={}/> */}
        </Routes>
      </main>
    </BrowserRouter>
  )
}
export default App;