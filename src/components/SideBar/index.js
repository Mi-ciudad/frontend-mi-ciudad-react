import React from 'react';
import '../../assets/css/reset.css';
import './styles.scss';
import '../../assets/css/mobile.css';


import Icon from '../../assets/images/Logo-trasnparent.png';

class SideBar extends React.Component {
    render() {
        return (
            <div class="sidebar-content">
                <div class="sidebar-menu"
                    id="sidebar-menu">
                    <figure>
                        <img src={Icon} alt='Algo Lindo' /> 
                    </figure>
                    <ul>
                        <li>
                            <a href="/main">
                                <i class="fas fa-home"></i> Menu
                            </a>
                        </li>
                        <li>
                            <a href="/profile">
                                <i class="far fa-user-circle"></i> Perfil
                            </a>
                        </li>
                        <li>
                            <a href="/history">
                                <i class="fas fa-history"></i> Historial
                            </a>
                        </li>
                        <li>
                            <a href="/tracking-case">
                                <i class="far fa-building"></i> Seguimiento de casos
                            </a>
                        </li>

                        <li>
                            <a href="/about-us">
                                <i class="far fa-address-card"></i>Sobre nosotros
                            </a>
                        </li>
                        <li>
                            <a href="/help">
                                <i class="far fa-question-circle"></i> Ayuda
                            </a>
                        </li>

                        <li class="cerrar-sesion">
                            <a href="/">
                                <i class="fas fa-sign-out-alt"></i> Cerrar sesión
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default SideBar;