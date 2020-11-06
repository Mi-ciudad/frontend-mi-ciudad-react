import React from 'react';
import '../../assets/css/reset.css';
import './styles.scss';
import '../../assets/css/mobile.css';


import Icon from '../../assets/images/Logo-trasnparent.png';

class SideBar extends React.Component {
    render() {
        return (
            <div className="sidebar-content">
                <div className="sidebar-menu"
                    id="sidebar-menu">
                    <figure>
                        <img src={Icon} alt='Algo Lindo' /> 
                    </figure>
                    <ul>
                        <li>
                            <a href="/main">
                                <i className="fas fa-home"></i> Menu
                            </a>
                        </li>
                        <li>
                            <a href="/profile">
                                <i className="far fa-user-circle"></i> Perfil
                            </a>
                        </li>
                        <li>
                            <a href="/history">
                                <i className="fas fa-history"></i> Historial
                            </a>
                        </li>
                        <li>
                            <a href="/tracking-case">
                                <i className="far fa-building"></i> Seguimiento de casos
                            </a>
                        </li>

                        <li>
                            <a href="/about-us">
                                <i className="far fa-address-card"></i>Sobre nosotros
                            </a>
                        </li>
                        <li>
                            <a href="/help">
                                <i className="far fa-question-circle"></i> Ayuda
                            </a>
                        </li>

                        <li className="cerrar-sesion">
                            <a href="/">
                                <i className="fas fa-sign-out-alt"></i> Cerrar sesión
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default SideBar;