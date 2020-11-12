import React from 'react';
import './styles.scss';
import '../../assets/css/reset.css';
import '../../assets/css/mobile.css';


const ChangePassword = () =>  {
   
        return (    
            <section className="change-password">
                <div className="form-password">
                    <ul>
                        <li className="title">
                        <label>Cambiar contraseña</label>
                        </li>
                        <li>
                            <label>Ingrese nueva contraseña</label>
                            <input placeholder="holamundo"></input>
                        </li>
                        <li>
                            <label>Repetir contraseña</label>
                            <input placeholder="holamundo"></input>
                        </li>
                        <li className="li-btn">
                            <button>Cambiar</button>
                        </li>
                    </ul>
                </div>
            
                
            </section>

        )
}

export default ChangePassword;