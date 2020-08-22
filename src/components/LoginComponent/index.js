import React, {useContext, useState} from 'react';
import './styles.scss';
import { UserContext } from "../../context/User";
import { useHistory } from "react-router-dom";
import '../../assets/css/reset.css';
import '../../assets/css/mobile.css';



import DefaultPicture from '../../assets/images/mock-phone.png';
import Mancha from '../../assets/images/manchar.svg';

const LoginComponent = () =>  {
    const context = useContext(UserContext);
    const history = useHistory();
    const [user, setUser] = useState("");

    const handleLogin = () => {
        context.setUser(user);
        history.push("/main")
    }
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
                           {/* e = evento / target = elemento en el que sucedio el evento /  */}
                           <input type="text" placeholder="UserName" value={user} onChange={(e) => setUser(e.target.value)}></input>
                       </div>
                       <div className="input-password box">
                           <label>Password</label>
                           <input type="password" placeholder="**********"></input>
                       </div>

                       <div className="btn-send" onClick={handleLogin}>
                           <p>Ingresar</p>
                       </div>

                       <div className="recover-password">
                           {/* <a href="#">Recuperar contraseña</a> */}
                           <a href="/Register">Registrarme</a>
                       </div>
                    </div>
               </div>
           </div>
        )


}

export default LoginComponent;