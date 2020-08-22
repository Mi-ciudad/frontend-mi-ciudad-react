import React from 'react';
import './styles.scss';
import '../../assets/css/mobile.css';


import DefaultPicture from '../../assets/images/mock-phone.png';

const RecoverPasswordComponent = () =>  {
        
        return (    
           <div className="container-login">
               <div className="content-left">
                   
                   <img src={DefaultPicture} alt='Algo Lindo' />                
               </div>

               <div className="content-right">
                   <div className="title">
                        <h3 className="section-title">Recuperar contraseña</h3>
                        <div className="line-title"></div>
                   </div>

                   <div className="login-form">
                       <div className="input-name box">
                           <label>Email</label>
                           <input type="text" placeholder="UserName"></input>
                       </div>
                       
                       <div className="btn-send">
                           <button>Enviar</button>
                       </div>
                       
                    </div>
               </div>
           </div>
        )
}

export default RecoverPasswordComponent;