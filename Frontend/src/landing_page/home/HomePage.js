import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import News from './News';
import Education from './Education';
import OpenAccount from '../OpenAccount';


function HomePage() {
    console.log("HomePage rendering");
    return ( 
        <>
        <Hero/>
        <Awards/>
        <Stats  />
        <Education/>
        <News/>
        <OpenAccount/>

        </>
     );
}

export default HomePage;