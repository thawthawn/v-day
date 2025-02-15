import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import No from './Pages/no';
import Pg1 from './Pages/pg1';
import Pg2 from './Pages/pg2';
import Pg3 from './Pages/pg3';
import Pg4 from './Pages/pg4';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pg1 />} />
        <Route path="/pg2" element={<Pg2 />} />
        <Route path="/pg3" element={<Pg3 />} />
        <Route path="/pg4" element={<Pg4 />} />
        <Route path="/no" element={<No />} />
      </Routes>
    </>
  )
}

export default App
