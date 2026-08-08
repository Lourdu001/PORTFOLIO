import { useState } from "react";

import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./components/home"));
const Project = lazy(() => import("./components/project"));
const Load = lazy(() => import("./components/load"));
import Navbar from "./components/navbar";
import { Provider } from "react-redux";
import { store } from "./StoreSlice/ColorStore";
import About from "./components/about";
import Resume from "./components/resume";
import Contact from "./components/contact";
import Ptest1 from "./components/ptest1";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
       

        <div style={{ marginTop: "30px" }}>
          <Suspense fallback={<Load />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Project />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/ptest1" element={<Ptest1 />} />
            </Routes>
          </Suspense>
        </div>
         <Navbar />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
