import { useState } from 'react'
import reactLogo from './assets/react.svg'
import image from './assets/images.jpeg'
import { Donut } from "react-awesome-shapes";
import Navbar from './components/Navbar';
import Box from '@mui/material/Box';
import Home from './components/Home';
import { Route, Routes } from "react-router-dom";
import BrandingNiceStudio from './components/BrandingNiceStudio';
import Portfolio from './components/Portfolio';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/portfolio/branding-nice-studio' element={<BrandingNiceStudio />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
      </Routes>
    </>
  )
}

export default App
