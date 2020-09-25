import React from 'react';
import './styles.scss';
import '../../assets/css/reset.css';
import '../../assets/css/mobile.css';


import DefaultPicture from '../../assets/images/mock-pho.png';
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
                           <label>Nombre</label>
                           <input type="text" placeholder="Nombre completo"></input>
                       </div>
                       <div className="input-user-name box">
                           <label>Apellido</label>
                           <input type="text" placeholder="UserName"></input>
                       </div>

                       <div className="input-user-ci box">
                           <label>Cedula</label>
                           <input type="text" placeholder="Cedula"></input>
                       </div>
                       <div className="input-email box">
                           <label>Email</label>
                           <input type="text" placeholder="test@gmail.com"></input>
                       </div>

                       <div className="input-password box">
<<<<<<< HEAD
                           <label>Contraseña</label>
=======
                           <label>contraseña</label>
>>>>>>> f1b912decdf3315352f3ab85ae3b713df7f4cc80
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