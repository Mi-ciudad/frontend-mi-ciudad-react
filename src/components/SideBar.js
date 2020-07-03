import React from 'react';


class SideBar extends React.Component {
    render() {
        return (
            <div class="sidebar-content">

                <div class="menu-mobile">
                    <a href="#">
                        <i class="fas fa-bars" id="btn-menu"></i>
                    </a>
                </div>

                <div class="sidebar-menu"
                    id="sidebar-menu">
                    <figure>
                        <img src="../../assets/images/Logo-1.png" />
                    </figure>
                    <ul>
                        <li>
                            <a href="/main">
                                <i class="fas fa-home"></i> Menu
                            </a>
                        </li>
                        <li>
                            <a href="./pages/perfil">
                                <i class="far fa-user-circle"></i> Perfil
                            </a>
                        </li>
                        <li>
                            <a href="./pages/reportes">
                                <i class="fas fa-list-ul"></i> Reportes
                            </a>
                        </li>
                        <li>
                            <a href="./pages/historial">
                                <i class="fas fa-history"></i> Historial
                            </a>
                        </li>
                        <li>
                            <a href="./pages/seguirCaso">
                                <i class="far fa-building"></i> Seguimiento de casos
                            </a>
                        </li>

                        <li>
                            <a href="./perfil/sobreNos">
                                <i class="far fa-address-card"></i>Sobre nosotros
                            </a>
                        </li>
                        <li>
                            <a href="./pages/ayuda">
                                <i class="far fa-question-circle"></i> Ayuda
                            </a>
                        </li>

                        <li class="cerrar-sesion">
                            <a href="#">
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