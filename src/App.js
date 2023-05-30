import React from 'react';
import Homepage from './components/Homepage';
import EarlyAccess from './components/EarlyAccess';
import Rider from './components/Rider';
import Partnership from './components/Partnership';
import { Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div className='App'>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/earlyaccess" element={<EarlyAccess />} />
        <Route path="/rider" element={<Rider />} />
        <Route path="/contact" element={<Partnership />} />
      </Routes>
    </div>
);
}

export default App;