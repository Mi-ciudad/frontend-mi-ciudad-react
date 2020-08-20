import React from 'react';
import './style.scss';

// import ProfileDiego from '../../assets/images/';
// pasar el png a svg

import PhotoProfileTiziana from '../../assets/images/1x/profile-tiziana.png'
import PhotoProfileDiego from '../../assets/images/1x/profile-diego.png'
import PhotoProfileBelen from '../../assets/images/1x/profile-belen.png'



const AboutComponent = () =>  {
        
        return (    
            <section className="about-us-section">
                <div className="header-city">
                    {/* <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p> */}
                    <figure>
                        {/* <img src={} alt='city' className="city" />  */}
                    </figure>
                </div>
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
                    <figure className="right img-barreto">
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
                        <label className="name-team">Belen Campos</label>
                        <div className="line-title"></div>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</p>
                    </div>
                    
                    <figure className="right img-right">
                        <img src={PhotoProfileBelen} alt='Belen Campos'></img>
                    </figure>
                    
                </div>
            </section>                
        )


}

export default AboutComponent;