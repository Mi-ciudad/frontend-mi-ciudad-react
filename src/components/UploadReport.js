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
      <section class="content">
        <div class="public-report">
          <div class="content-user">
            <div class="profile-img">
              <figure>
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHc1-1_MhLsnQ/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=ey3Kxn_4iVo0nNZi21Y6OUuB07ku6vnfoTaAeKoiWjE" />
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
