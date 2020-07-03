import React from 'react';
import PropTypes from 'prop-types'

class PublicReport extends React.Component {

    render() {
        return (
            <div class="public-report">

                <div class="content-user">
                    <div class="profile-img">
                        <figure>
                            <img src="../../assets/images/fot-profil.png" />
                        </figure>
                        <p>Tironi_Tiziana</p>

                        <div class="id-post">
                            <p>#45782</p>
                        </div>

                    </div>
                </div>

                <div class="description desciption-post">
                    <p>{this.props.descripcion}</p>
                </div>

                <div class="post-photo">
                    <figure>
                        <img src="../../assets/images/back-login.png" />
                    </figure>
                    <div class="localation">
                        <i class="fas fa-map-marker-alt"></i>
                        <label>{this.props.ubicacion}</label>
                    </div>
                </div>

                <div class="items-lower">
                    <ul>
                        <li>
                            <a href="#">
                                <i class="fas fa-thumbs-up like"></i>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <i class="fas fa-comment comments"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }


}

export default PublicReport;