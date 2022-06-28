import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ASNavbar from "./components/Navbar";
import Page0 from "./components/Page0";
import Page1 from "./components/Page1";

function App() {
  return (

    <BrowserRouter>
          <ASNavbar />
          <Routes>
            <Route path="" element={<Page1 />} />
            <Route path="abilitysummaries/champion" element={<Page1 />} />
            <Route path="abilitysummaries/livegame" element={<Page0 />} />
          </Routes>
    </BrowserRouter>
  )
}

export default App;
