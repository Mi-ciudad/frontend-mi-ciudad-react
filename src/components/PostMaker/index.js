import React, { useState, useContext } from "react";
import './styles.scss';

import PhotoProfile from '../../assets/images/fot-profil.png';
import { UserContext } from "../../context/User";

// state = {
//   descripcion:"",
//   ubicacion:""
// }

// componentDidMount() {
//   console.log(this.props)
// }

// valueToState = (target) => {
//   this.setState(
//       (this.state = () => ({
//           [target.name]: target.value,
//       }))
//   );
// };

// A esto se le llama hook de estado, lo que hace basicamente es añadirle un estado a un componente funcional
// en este caso lo usamos para los datos que le vayamos a poner al reporte, el estado incial de Description es "null", pero el estado cambia cuando 
// el usuario escribe la description.
// es lo mismo que es this.algo

const PostMaker = ({ setReports, reports }) => {
  const context = useContext(UserContext)
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null)

  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(URL.createObjectURL(img))
    }
  };

  // Esto es para que el user no pueda mandar el reporte si tiene menos de 3 palabras, ademas publica el reporte
  const createReports = () => {
    if (description.length > 3) {
      setReports([...reports, { description, image }]);
      setDescription('')

    }
  };
  console.log(description, reports);

  return (
    <div className="report">
      <div className="top-report">
        <div className="profile">
          <figure>
            <img src={PhotoProfile} alt='Algo Lindo' />                
          </figure>
          <p className="userName">{context.user}</p>
        </div>
        <div className="id">#122333</div>
      </div>
    
      <div className="description-report">
        {/* aca se utiliza el hook de arriba, se le pasa la funcion de onChange={setDescription} para el cambio de estado */}
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Ingrese la descripcion"></textarea>
      </div>

      <div className="image-section">
      { image && 
        <img src={image} style={{ width: 200, height: 200}}/>}
      </div>
      
      <div className="lower-items">
        <ul>
            <li>
              <a href="#">
                  <i class="fas fa-cogs settings"></i>
              </a>
          </li>

            <li>
              {/* <a href="#">
                  <i class="fas fa-camera camera"></i>
              </a> */}
              <div className="btn-camera-opacity"><i class="fas fa-camera camera"></i></div>
              <input className="input-img" type="file" onChange={onImageChange}></input>
            </li>

            <li>
              <a href="#">
                <i class="fas fa-map-marker-alt map-marker"></i>
              </a>
            </li>
          </ul>
          <div className="btn" onClick={createReports}>
            <button className="btn-public">Publicar</button>
          </div>
      </div>
    </div>
  );
};

export default PostMaker;
