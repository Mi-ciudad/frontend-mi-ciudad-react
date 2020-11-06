import React, { useState, useContext } from "react";
import './styles.scss';
import '../../assets/css/mobile.css';
import jwt_decode from "jwt-decode";

import PhotoProfile from '../../assets/images/default-profile.png';
import { UserContext } from "../../context/User";

const PostMaker = ({ setReports, reports }) => {
  const context = useContext(UserContext)
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  const [ci, setCi] =  useState(0);




const onImageChange = event => {
  if (event.target.files && event.target.files[0]) {
    let img = event.target.files[0];
    setImage(URL.createObjectURL(img))
  }
};
  // Esto es para que el user no pueda mandar el reporte si tiene menos de 3 palabras, ademas publica el reporte
  const createReports = () => {
  
    if (description.length > 1){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "email": `${context.user}`
        })
      };
    
        fetch('http://localhost:5000/ci', requestOptions)
          .then(res => res.json())
          .then(result => {
            const results = result.data
            if (results.ci) {
              console.log(results.ci)
              setCi(ci + results.ci)
            } else {
              console.log("Hubo un error")
            }
          })
          .catch(console.log(ci))
    }

    if (description.length > 3) {

      const requestOptions2 = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "descripcion": `${description}`,
          "direccion": `${location}`,
          "estado": "Esperando aprobación",
          "ci": ci
        })
      };
        fetch('http://localhost:5000/createReport', requestOptions2)
          .then(res => res.json())
          .then((result) => {
            if (result.status === 201) {
              console.log(result)
              //Tomar datos de la request para altar el reporte, los esta tomando mal
            } else {
              console.log("Hubo errores verificar")
              console.log(result.status)
            }
          },

            (error) => {
              console.log(error)
            }
          )
          .catch(console.log(requestOptions2))
    }
    setReports([...reports, { description, image, location }]);
    setDescription('')
    setLocation('')
    window.location.reload();
  };

  return (
    <>
      <div className="report">
        <div className="top-report">
          <div className="profile">
            <figure>
              <img src={PhotoProfile} alt='Algo Lindo' />
            </figure>
            <p className="userName">{jwt_decode(localStorage.getItem("token")).email}</p>
          </div>
          {/* <div className="id">#122333</div> */}
        </div>

        <div className="description-report">
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Ingrese la descripcion"></textarea>
        </div>

        <div className="location-report">
          <textarea value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Ingrese la ubicacion"></textarea>
        </div>

        <div className="image-section">
          {image &&
            <img src={image} alt="upload" style={{ width: 100, height: 100 }} />}
        </div>

        <div className="lower-items">
          <ul>
            <li>
              <button>
                <i className="fas fa-cogs settings"></i>
              </button>
            </li>

            <li>
              <div className="btn-camera-opacity"><i className="fas fa-camera camera"></i></div>
              <input className="input-img" type="file" onChange={onImageChange}></input>
            </li>

            <li>
              <button>
                <i className="fas fa-map-marker-alt map-marker"></i>
              </button>
            </li>
          </ul>
          <div className="btn" onClick={createReports}>
            <button className="btn-public">Publicar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostMaker;
