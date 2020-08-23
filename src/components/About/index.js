
import './style.scss';
<<<<<<< HEAD
import React from 'react'

const AboutComponent = () =>  {
  
        return (
            <div>si</div>
=======
import '../../assets/css/reset.css';
import '../../assets/css/style.css';


// import ProfileDiego from '../../assets/images/';
// pasar el png a svg

import PhotoProfileTiziana from '../../assets/images/1x/profile-tiziana.png'
import PhotoProfileDiego from '../../assets/images/1x/profile-diego.png'
import PhotoProfileBelen from '../../assets/images/1x/profile-belenn.png'
import PhotoProfileDana from '../../assets/images/1x/profile-dana.png'



const AboutComponent = () =>  {
        
        return (    
            <section className="about-us-section">
                <div className="team-presentation person-1">
                    <div className="left">
                        <label className="name-team">Tiziana Tironi</label>
                        <div className="line-title"></div>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</p>
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
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</p>
                    </div>
                </div>

                <div className="team-presentation person-1">
                    <div className="left">
                        <label className="name-team">Belen Campos</label>
                        <div className="line-title"></div>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</p>
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
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</p>
                    </div>
                </div>

                <div className="team-presentation person-1">
                    <div className="left">
                        <label className="name-team">Lucia Anza</label>
                        <div className="line-title"></div>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</p>
                    </div>
                    
                    <figure className="right img-right">
                        <img src={PhotoProfileBelen} alt='Belen Campos'></img>
                    </figure>
                </div>
            </section>                
>>>>>>> df856bc0d5bfc855c9f395dedb4f4b986681d81a
        )
    }
export default AboutComponent;