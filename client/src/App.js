import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Page0 from "./components/Page0";
import Page1 from "./components/Page1";

function App() {
  return (

    <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="" element={<Page0 />} />
            <Route path="page1" element={<Page1 />} />
          </Routes>
    </BrowserRouter>
  )
}

export default App;
