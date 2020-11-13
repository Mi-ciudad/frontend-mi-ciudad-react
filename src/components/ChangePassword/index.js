import React from 'react';
import './styles.scss';
import '../../assets/css/reset.css';
import '../../assets/css/mobile.css';
import jwt_decode from 'jwt-decode';
import useState from 'react';


const ChangePassword = () =>  {
    const [password1, setPassword1] = useState("");
    const [password, setPassword] = useState("");

    const ChangePasswordFunction = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
               "ci": jwt_decode(localStorage.getItem("token")).ci,
               "password": `${password}`
            })
        };

        fetch('http://10.1.14.80:5000/password', requestOptions)
            .then(res => res.json())
            .then((result) => {
                if (result.status === 200) {
                    console.log("successful")
                } else {
                   console.log("error")
                }
            },
                (error) => {
                    console.log(error)
                }
            )
            .catch(console.log(requestOptions))
    }
   
        return (    
            <section className="change-password">
                <div className="form-password">
                    <ul>
                        <li className="title">
                        <label>Cambiar contraseña</label>
                        </li>
                        <li>
                            <label>Ingrese nueva contraseña</label>
                            <input placeholder="************" value={password1} onChange={(e) => setPassword1(e.target.value)}></input>
                        </li>
                        <li>
                            <label>Repetir contraseña</label>
                            <input placeholder="************" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        </li>
                        <li className="li-btn">
                            <button onClick={ChangePasswordFunction}>Cambiar</button>
                        </li>
                    </ul>
                </div>
            
                
            </section>

        )
}

export default ChangePassword;