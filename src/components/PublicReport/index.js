import React from 'react';

class PublicReport extends React.Component {

    render() {
        return (
            <div className="content-public-report">
                <div class="public-report">

                    <div class="content-user">
                        <div class="profile-img">
                            <figure>
                                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHc1-1_MhLsnQ/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=ey3Kxn_4iVo0nNZi21Y6OUuB07ku6vnfoTaAeKoiWjE" />
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
                </div>
            </div>
        )
    }


}

export default PublicReport;