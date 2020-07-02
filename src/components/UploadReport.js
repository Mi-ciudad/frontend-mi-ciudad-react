import React, { useState } from "react";
import { Component } from "react";
import PublicReport from "./PublicReport";

class UploadReport extends Component {
  state = {
    arrayReport: [
      {
        descripcion: "Hola",
        ubicacion: "Mundo",
      },
    ],
  };

  mapearArray = () => {
    this.state.arrayReport.map();
  };

  asignarValorVariable = () => {
    this.state.arrayReport.push(this.state.descripcion, this.state.ubicacion);
    console.log(this.state.arrayReport);
  };

  //funcion que setea el state del componente con lo
  valueToState = (target) => {
    this.setState(
      (this.state = () => ({
        [target.name]: target.value,
      }))
    );
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
            {/* <textarea name="ubicacion" type="text" placeholder="Escribe la url de la foto aqui" onChange={event => this.valueToState(event.target)}></textarea> */}
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
                  onClick={this.asignarValorVariable}
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
