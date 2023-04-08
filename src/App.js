import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import EarlyAccess from './components/EarlyAccess';
import HowAppWorks from './components/HowAppWorks';
import Explore from './components/Explore';
import Rider from './components/Rider';
import Partnership from './components/Partnership';
import Footer from './components/Footer';
import MobileHeader from './components/MobileHeader';

function App() {
  const isMobile = window.innerWidth < 768;

  return (
    <div className='App'>
      
      <Navbar />
      {isMobile ? <MobileHeader /> : <Header />}
      <EarlyAccess />
      <HowAppWorks />
      <Explore />
      <Rider />
      <Partnership />
      <Footer />
    </div>
);
}

export default App;