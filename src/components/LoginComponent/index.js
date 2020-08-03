import React from 'react';
import './styles.scss';

import DefaultPicture from '../../assets/images/mock-phone.png';
import Mancha from '../../assets/images/manchar.svg';

const LoginComponent = () =>  {
        
        return (    
           <div className="container-login">
               <div className="content-left">
                   <img src={Mancha} alt='Algo Lindo' className="img-mancha" />                
                   <img src={DefaultPicture} alt='Algo Lindo' className="phone" />                
               </div>

               <div className="content-right">
                   <div className="title">
                        <h3 className="section-title">Login</h3>
                        <div className="line-title"></div>
                   </div>

                   <div className="login-f">
                       <div className="input-name box">
                           <label>Username</label>
                           <input type="text" placeholder="UserName"></input>
                       </div>
                       <div className="input-password box">
                           <label>Password</label>
                           <input type="password" placeholder="**********"></input>
                       </div>

                       <div className="btn-send">
                           <a href="/main">Ingresar</a>
                       </div>

                       <div className="recover-password">
                           <a href="#">Recuperar contraseña</a>
                       </div>
                    </div>
               </div>
           </div>
        )


}

export default LoginComponent;