import React, { useState, useContext } from "react";
import './styles.scss';
import '../../assets/css/mobile.css';


import PhotoProfile from '../../assets/images/fot-profil.png';
import { UserContext } from "../../context/User";

const PostMaker = ({ setReports, reports }) => {
  const context = useContext(UserContext)
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  const [modal, setModal] = useState(false);
  const [barrio,setBarrio] = useState();
  const [reference,setReference] = useState();
  const [calle,setCalle] = useState("");

  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(URL.createObjectURL(img))
    }
  };

  // Esto es para que el user no pueda mandar el reporte si tiene menos de 3 palabras, ademas publica el reporte
  const createReports = () => {
    if (description.length > 3) {
      setReports([...reports, { description, image, location }]);
      setDescription('')

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "description": ``,
            "direction": ``,
            "state" : ``,
            "ci" : ``
        })
    };

    fetch('http://localhost:5000/reports/createReport', requestOptions)
        .then(res => res.json())
        .then((result) => {
            if (result.status === 200) {
                
            } else {
            }
        },
            (error) => {
                console.log(error)
            }
        )
        .catch(console.log(requestOptions))




    }
  };

  console.log(description, reports, location);

  return (
    <>
    <div className="report">
      <div className="top-report">
        <div className="profile">
          <figure>
            <img src={PhotoProfile} alt='Algo Lindo' />                
          </figure>
          <p className="userName">{context.user}</p>
        </div>
        {/* <div className="id">#122333</div> */}
      </div>
    
      <div className="description-report">
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Ingrese la descripcion"></textarea>
      </div>

     { /*<div className="location-report">
        <textarea value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Ingrese la ubicacion"></textarea>
      </div> */}

      <div className="image-section">
      { image && 
        <img src={image} alt="upload" style={{ width: 100, height: 100}}/>}
      </div>
      
      <div className="lower-items">
        <ul>
          <li>
            <button>
              <i class="fas fa-cogs settings"></i>
            </button>
          </li>

          <li>
            <div className="btn-camera-opacity"><i class="fas fa-camera camera"></i></div>
            <input className="input-img" type="file" onChange={onImageChange}></input>
          </li>

          <li>
            <button onClick={()=> setModal(!modal)}>
              <i class="fas fa-map-marker-alt map-marker"></i>
            </button>
          </li>
        </ul>
        <div className="btn" onClick={createReports}>
          <button className="btn-public">Publicar</button>
        </div>
      </div>
    </div>
    <div className="background-opacity-modal" style={{display: modal ? "flex" : "none" }}>
      <div className="modal">
        {/* <button onClick={()=> setCloseModal(!closeModal)}>
          <i class="fas fa-times"></i>
        </button> */}
        <div className="form-left">
          <div className="box-input">
            <label>Barrio</label>
            <input type="text" placeholder="Centro"></input>
          </div>
          <div className="box-input">
            <label>Calle</label>
            <input type="text" placeholder="Paraguay"></input>
          </div>
          <div className="box-input">
            <label>Referencia</label>
            <input type="text" placeholder="loremspi"></input>
          </div>
        </div>
        
        <div className="form-right">
          <div className="box-input">
            <label>Comentarios</label>
            <textarea className="comment-box" placeholder="loremspi"></textarea>
          </div>
          <div className="box-btn">
            <button>Guardar</button>
          </div>
        </div>
      </div>
    </div>  
    </>
  );
};

export default PostMaker;
