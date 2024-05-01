import React from 'react';
import sample from './video/test.mp4';
import { Carousel } from 'react-responsive-carousel';
import image1 from './assets/1.jpg';
import image2 from './assets/2.jpg';
import image3 from './assets/3.jpg';
import './Accueil.css';

function scrollToBottom() {
    const rectDiv = document.getElementById('rectDiv');
    if (rectDiv) {
        window.scrollTo({
            top: rectDiv.offsetTop,
            behavior: 'smooth'
        });
    }
}

function Home() {
    return (
        <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
            <h2>Home page</h2>

            <div style={{ position: 'relative' }}>
                <video className='videoTag' autoPlay loop muted style={{ width: '100%', height: '100%' }}>
                    <source src={sample} type='video/mp4' />
                </video>
                <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
                    <h3>A vos marques, prêt</h3>
                    <button className="scroll-button" onClick={scrollToBottom}>Partez</button>
                </div>
            </div>

            <div id="rectDiv" style={{ width: '100%', height: '50vh', backgroundColor: 'yellow' }}>
                <h3 style={{ textAlign: 'center', color: 'white', marginTop: '20px' }}>Du footing au podium</h3>
            </div>
            <div style={{ width: '100%', height: '50vh', backgroundColor: 'green', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="votre_image.jpg" alt="Votre image" style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '10px' }} />
            </div>
            <Carousel>
                <div>
                    <img title="test" src={image1} style={{ maxWidth: '200px', maxHeight: '200px' }} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={image2} style={{ maxWidth: '200px', maxHeight: '200px' }} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image3} style={{ maxWidth: '200px', maxHeight: '200px' }} />
                    <p className="legend">Legend 3</p>
                </div>
                
            </Carousel> 
        </div>
    );
}

export default Home;
