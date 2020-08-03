import React from 'react';
import './styles.scss';

import DefaultPicture from '../../assets/images/mock-phone.png';
import Mancha from '../../assets/images/manchar.svg';


const Register = () =>  {
        
        return (    
           <div className="container-login">
               <div className="content-left">
                    <img src={Mancha} alt='Algo Lindo' className="img-mancha" />                
                    <img src={DefaultPicture} alt='Algo Lindo' className="phone" />       
               </div>

               <div className="content-right">
                   <div className="title">
                        <h3 className="section-title">Registro</h3>
                        <div className="line-title"></div>
                   </div>

                   <div className="login-form">
                       
                       <div className="input-name box">
                           <label>Nombre completo</label>
                           <input type="text" placeholder="Nombre completo"></input>
                       </div>
                       <div className="input-user-name box">
                           <label>Nombre de usuario</label>
                           <input type="text" placeholder="UserName"></input>
                       </div>
                       <div className="input-email box">
                           <label>Email</label>
                           <input type="text" placeholder="test@gmail.com"></input>
                       </div>

                       <div className="input-password box">
                           <label>contraseña</label>
                           <input type="password" placeholder="**********"></input>
                       </div>

                       
                       <div className="input-password-repet box">
                           <label>Repetir contraseña</label>
                           <input type="password" placeholder="**********"></input>
                       </div>

                       <div className="btn-send">
                           <button>Crear</button>
                       </div>
                    
                    </div>
               </div>
           </div>
        )


}

export default Register;