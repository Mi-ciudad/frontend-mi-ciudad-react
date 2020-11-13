
import './style.scss';

import React from 'react'

import '../../assets/css/reset.css';
import '../../assets/css/style.css';
import '../../assets/css/mobile.css';

import PhotoProfileTiziana from '../../assets/images/1x/profile-tiziana.png';
import PhotoProfileDiego from '../../assets/images/1x/profile-diego.png';
import PhotoProfileBelen from '../../assets/images/1x/profile-belenn.png';
import PhotoProfileDana from '../../assets/images/1x/profile-dana.png';
import PhotoProfileLucia from '../../assets/images/1x/profile-lucia.png';

// import Arrow from '../../assets/images/arrow-down.svg';

const AboutComponent = () =>  {
        
        return (    
            <section className="about-us-section">
                <div className="team-presentation person-1">
                    <div className="left">
                        <label className="name-team">Tiziana Tironi</label>
                        <div className="line-title"></div>
                        <p>Me llamo Tiziana Tironi, soy la Product Manager, UI design y tambien me encargo del frontend del proyecto. Amo los animales y escuchar música. </p>
                    </div>
                    
                    <figure className="right img-right">
                        <img src={PhotoProfileTiziana} alt='Tiziana Tironi'></img>
                    </figure>
                </div>

                <div className="team-presentation person-2">
                    <figure className="right img-left">
                        <img src={PhotoProfileDana} alt='Dana Castroman'></img>
                    </figure>

                    <div className="left">
                        <label className="name-team">Dana Castroman</label>
                        <div className="line-title"></div>
                        <p>Soy Dana Castroman, en Mi Ciudad estuve desarrollando parte del backend. Me encanta la música, en especial la de los 60's hasta los 90's, mi banda favorita es The Beatles y me concidero un geek de la series y películas!</p>
                    </div>
                </div>

                {/* <div className="section-arrow">
                    <img src={Arrow} alt="arrow"></img>
                </div> */}

                <div className="team-presentation person-1">
                    <div className="left">
                        <label className="name-team">Belen Campos</label>
                        <div className="line-title"></div>
                        <p>Soy Belén Campos, trabajé en la aplicación de escritorio junto con Lucia. Tengo un gusto muy acentuado por la música, el análisis psicológico y la estética.</p>
                    </div>
                    
                    <figure className="right img-right">
                        <img src={PhotoProfileBelen} alt='Belen Campos'></img>
                    </figure>
                </div>

                <div className="team-presentation person-2">
                    <figure className="right img-left">
                        <img src={PhotoProfileDiego} alt='Diego Barreto'></img>
                    </figure>

                    <div className="left">
                        <label className="name-team">Diego Barreto</label>
                        <div className="line-title"></div>
                        <p>Soy Diego Barreto, soy uno de los encargados del desarrollo frontend y el encargado del desarrollo backend junto con Dana. Soy un aficionado de la fotografía y soy scout del grupo Armonia °40</p>
                    </div>
                </div>

                <div className="team-presentation person-1">
                    <div className="left">
                        <label className="name-team">Lucia Anza</label>
                        <div className="line-title"></div>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</p>
                    </div>
                    
                    <figure className="right img-right">
                        <img src={PhotoProfileLucia} alt='Lucia Anza'></img>
                    </figure>
                </div>
            </section>                

        )
    }
export default AboutComponent;