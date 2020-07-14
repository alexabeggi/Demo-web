import React from 'react';

import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import SocialMedia from '../components/SocialMedia';
 
import '../components/SocialMedia.css';

function Follow(){
    return (
       <div className="follow">
            <header>
                <Logo />
                <Navigation />
            </header>
            <main className="root3">
                <SocialMedia name="Twitter" color='#1DA1F2' logo='https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-2-1.png' logowidth='60px' logoheigth='50px'/>
                <SocialMedia name="Facebook" color='#4267B2' logo='https://images.vexels.com/media/users/3/137253/isolated/preview/90dd9f12fdd1eefb8c8976903944c026-icono-de-facebook-logo-by-vexels.png' logowidth='60px' logoheigth='60px'/>
                <SocialMedia name="Instagram" color='#8A3AB9' logo='https://es.logodownload.org/wp-content/uploads/2018/10/instagram-logo1.png'logowidth='60px' logoheigth='60px'/>
            </main>
            <Footer />
       </div>
    );
}
 
export default Follow;