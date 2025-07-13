import React from 'react';
import Hero from './Hero';
import Team from './Team';
import Market from './Market';
import Why from './Why';
import Terms from './Terms';
import Helps from './Helps';

function AboutPage() {
    return ( 
        <div>
            <Hero/>
            <Market/>
            <Why/>
            <Terms/>
            <Helps/>
        </div>
     );
}

export default AboutPage;