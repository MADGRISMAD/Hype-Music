import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from "./Header";
import Search from "./Search";
import Play from "./Play";
import Sidebar from "./Sidebar";
import Home from "./Home";
const App = () => {
  return (
    <BrowserRouter>
    <html lang='en'>

      <header>
      <React.Fragment>
        <Header/>
        </React.Fragment>
      </header>
      <body>
        <Sidebar />
          <Routes>
            <Route>
              <Route exact path = "/" element={<Home />}/>
              <Route exact path = "/search" element={<Search />}/>
              <Route exact path = "/play" element={<Play />}/>
            </Route>
            {/* <Route element={}/> */}
          </Routes>
      </body>
    </html>
    </BrowserRouter>
  )
}
export default App;