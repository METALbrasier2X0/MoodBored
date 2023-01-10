import React from 'react';

/**
 * Code to show the home page
 * @return  {React element}             Containers that shows the home page   
 */

import LandingPage from './LandingPage';
import Navbar from './Navbar';

function Home() {

  return (
   <>
    
    <Navbar />
    <main className='main-content'>
    <LandingPage />
    </main>
   </>

  );
}

export default Home;