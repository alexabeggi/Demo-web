import React from 'react';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import HomeSec from '../components/HomeSec';
import YogaSec from '../components/YogaSec';
import MindSec from '../components/MindSec';
import RetrSec from '../components/RetrSec';


function Home(){
    return (
       <div>
            <header>
                <Logo />
                <Navigation />
            </header>
            <main>
                <HomeSec/>
                <YogaSec />
                <MindSec />
                <RetrSec />
            </main>
            <Footer />
       </div>
    );
}
 
export default Home;