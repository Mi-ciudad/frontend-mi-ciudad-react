import React, { useContext, useState } from 'react';
import './styles.scss';
import '../../assets/css/reset.css';
import '../../assets/css/mobile.css';
import { UserContext } from "../../context/User";
import { useHistory } from "react-router-dom";
import DefaultPicture from '../../assets/images/mock-pho.png';
import Mancha from '../../assets/images/manchar.svg';


const Register = () =>  {
    const context = useContext(UserContext);
    const history = useHistory();
    const [nombre, setName] = useState("");
    const [apellido, setApellido] = useState("");
    const [password, setPassword] = useState("");    
    const [cedula, setCi] = useState("");
    const [email, setEmail] = useState("");


    const registerFunction = () => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": `'${email}'`,
                "passwd": `'${password}'`,
                "ci" : `${cedula}`,
                "nombre" : `'${nombre}'`,
                "apellido" : `' ${apellido}'`,
                "tipoUsuario" : "Usuario"
            })
        };

        fetch('http://localhost:5000/register', requestOptions)
            .then(res => res.json())
            .then((result) => {
                if (result.status === 200) {
                    handleRegister()
                
                } else if(result.status === 403){
                    console.log("Error en el registro")
                }
            },
                (error) => {
                    console.log(error)
                }
            )
            .catch(console.log(requestOptions))

    }

    const handleRegister = () => {
        context.setUser(nombre + " " + apellido);
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
                           <label>Nombre</label>
                           <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setName(e.target.value)}></input>
                       </div>
                       <div className="input-user-name box">
                           <label>Apellido</label>
                           <input type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)}></input>
                       </div>

                       <div className="input-user-ci box">
                           <label>Cedula</label>
                           <input type="text" placeholder="Cedula" value={cedula} onChange={(e) => setCi(e.target.value)}></input>
                       </div>
                       <div className="input-email box">
                           <label>Email</label>
                           <input type="text" placeholder="test@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                       </div>

                       <div className="input-password box">
                           <label>Contraseña</label>
                           <input type="password" placeholder="**********" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                       </div>
                       <div className="btn-send">
                           <button onClick = {registerFunction}> Crear </button>
                       </div>
                    
                    </div>
               </div>
           </div>
        )


}

export default Register;