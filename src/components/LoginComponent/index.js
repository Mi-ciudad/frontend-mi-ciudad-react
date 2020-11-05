import React, { useContext, useState } from 'react';
import './styles.scss';
import { UserContext } from "../../context/User";
import { useHistory } from "react-router-dom";
import '../../assets/css/reset.css';
import '../../assets/css/mobile.css';

import DefaultPicture from '../../assets/images/mock-phone-rea.png';
import Mancha from '../../assets/images/manchar.svg';

const LoginComponent = () => {
    const context = useContext(UserContext);
    const history = useHistory();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const loginFunction = () => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": `${user}`,
                "passwd": `${password}`
            })
        };

        fetch('http://10.1.14.80:5000/login', requestOptions)
            .then(res => res.json())
            .then((result) => {
                if (result.status === 200) {zz
                    handleLogin();
                } else {
                    handleRegister()
                }
            },
                (error) => {
                    console.log(error)
                }
            )
            .catch(console.log(requestOptions))

    }

    const handleLogin = () => {
        context.setUser(user);
        history.push("/main")
    }

    const handleRegister = () => {
        context.setUser(user);
        history.push("/register")
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
                        <input type="password" placeholder="**********" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>

                    <div className="btn-send" onClick={loginFunction}>
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