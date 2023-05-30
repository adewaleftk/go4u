import React from 'react'
import Navbar from './Navbar';
import Header from './Header';
import EarlyAccess from './EarlyAccess';
import HowAppWorks from './HowAppWorks';
import Explore from './Explore';
import Rider from './Rider';
import Partnership from './Partnership';
import Footer from './Footer';
import MobileHeader from './MobileHeader';
import About from './About'

function Homepage() {
    const isMobile = window.innerWidth < 768;

    return (
        
        <div>
            <Navbar />
            {isMobile ? <MobileHeader /> : <Header />}
            <EarlyAccess />
            <HowAppWorks />
            <Explore />
            <Rider />
            <Partnership />
            <About />
            <Footer />
        </div>
  )
}

export default Homepage