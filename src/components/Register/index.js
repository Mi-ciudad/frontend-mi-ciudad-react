import React from 'react';
import { useContext, useState } from 'react';
import { UserContext } from "../../context/User";
import { useHistory } from "react-router-dom";
import './styles.scss';

import DefaultPicture from '../../assets/images/mock-phone.png';
import Mancha from '../../assets/images/manchar.svg';


const Register = () => {
    const context = useContext(UserContext);
    const history = useHistory();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [ci, setCi = useState] = ("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [userType, setUserType] = useState("");


    const registerFunction = () => {
      
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": `${user}`,
                "passwd": `${password}`,
                "ci" : `${ci}`,
                "nombre" : `${name}`,
                "apellido" : `${surname}`,
                "tipoUsuario" : `${userType}`
            })
        }

        fetch('http://localhost:5000/users/signUp', requestOptions)
            .then(res => res.json())
            .then((result) => {
               
                if (result.status = 203) {
                 
                } else {
                  
                }

            },
                (error) => {
                    console.log(error);
                }
            )
            .catch(console.log(requestOptions))
    };

    const handleView = () => {
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

                    <div className="btn-send" onClick={registerFunction()}>
                        <button>Crear</button>
                    </div>

                </div>
            </div>
        </div>
    )


}

export default Register;