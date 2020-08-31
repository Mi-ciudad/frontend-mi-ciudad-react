import React from 'react';
import '../../assets/css/mobile.css';
import './styles.scss'

export default function Perfil() {
    return (
        <div className="profile-section">
            <div className="photo-profile">
                <figure>
                    <img src="https://avatars0.githubusercontent.com/u/49923002?s=400&v=4" />
                </figure>
            </div>

            <div className="data-tables">
                <ul>
                    <li>
                        <div className="left">
                            <i classNamev="fas fa-user"></i>                       
                            <input type="text" placeholder="Nombre & Apellido"></input>
                        </div>
                        <div className="right">
                            <button type="button">
                                <i class="far fa-edit"></i>
                            </button>
                        </div>
                    </li>

                    <li>
                        <div className="left">
                            <i class="far fa-user-circle"></i>                       
                            <input type="text" placeholder="Nombre de usuario"></input>
                        </div>
                        <div className="right">
                            <button type="button">
                                <i class="far fa-edit"></i>
                            </button>
                        </div>
                    </li>

                    <li>
                        <div className="left">
                            <i class="fas fa-map-marker-alt"></i>                       
                            <input type="text" placeholder="Casos con seguimiento"></input>
                        </div>
                        <div className="right">
                            <button type="button">
                                <i class="far fa-edit"></i>
                            </button>
                        </div>
                    </li>

                    <li>
                        <div className="left">
                            <i class="fas fa-list-ul"></i>                       
                            <input type="text" placeholder="Cantidad de reportes"></input>
                        </div>
                        <div className="right">
                            <button type="button">
                                <i class="far fa-edit"></i>
                            </button>
                        </div>
                    </li>

                    <li>
                        <div className="left">
                            <i class="fas fa-map-marker-alt"></i>                      
                            <input type="text" placeholder="Direccion"></input>
                        </div>
                        <div className="right">
                            <button type="button">
                                <i class="far fa-edit"></i>
                            </button>
                        </div>
                    </li>

                    <li>
                        <div className="left">
                            <i class="fas fa-lock"></i>                      
                            <input type="text" placeholder="Contraseña"></input>
                        </div>
                        <div className="right">
                            <button type="button">
                                <i class="far fa-edit"></i>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
