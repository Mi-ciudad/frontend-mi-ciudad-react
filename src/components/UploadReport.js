import React, { useState } from "react";
import { Component } from "react";
import PublicReport from "./PublicReport";
import { render } from "@testing-library/react";
import Main from '../pages/Main'

class UploadReport extends Component {

    state = {
        descripcion:"",
        ubicacion:""
    }
    
    componentDidMount() {
        console.log(this.props)
    }

    
    

    //funcion que setea el state del componente con lo
    valueToState = (target) => {
        this.setState(
            (this.state = () => ({
                [target.name]: target.value,
            }))
        );
      
        console.log(target.name + " = " + target.value)
    };
           
    render() {
        return (
            <section class="content report-section">
                <div class="public-report">
                    <div class="content-user">
                        <div class="profile-img">
                            <figure>
                                <img src="../../assets/images/fot-profil.png" />
                            </figure>
                            <p>Tironi_Tiziana</p>
                        </div>
                    </div>

                    <div class="description">
                        <textarea
                            name="descripcion"
                            type="text"
                            placeholder="Escribe la descripcion aqui"
                            onChange={(event) => this.valueToState(event.target)}
                        ></textarea>
                        <textarea
                            name="ubicacion"
                            type="text"
                            placeholder="Escribe la ubicacion aqui"
                            onChange={(event) => this.valueToState(event.target)}
                        ></textarea>
                    </div>

                    <div class="items-lower">
                        <ul>
                            <li>
                                <a href="#">
                                    <i class="fas fa-cogs settings"></i>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <i class="fas fa-camera camera"></i>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <i class="fas fa-map-marker-alt map-marker"></i>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    class="btn-public"
                                        onClick={() => { this.props.newReport (this.state.descripcion,this.state.ubicacion) }}
                                > 
                                    {" "}
                  Publicar{" "}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}
export default UploadReport;
