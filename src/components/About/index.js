import React from 'react';
import './style.scss';

import IconCity from '../../assets/images/city.png';


const AboutComponent = () =>  {
        
        return (    
            <section className="about-us-section">
                <div className="team-presentation">
                    <figure>
                        <img src={IconCity} alt='city' className="city" /> 
                    </figure>
                </div>
            </section>                
        )


}

export default AboutComponent;