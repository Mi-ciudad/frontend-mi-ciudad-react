import React, { useState } from "react";
import './styles.scss';

import PhotoProfile from '../../assets/images/fot-profil.png';

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
  const [description, setDescription] = useState("");

  // Esto es para que el user no pueda mandar el reporte si tiene menos de 3 palabras, ademas publica el reporte
  const createReports = () => {
    if (description.length > 3) {
      setReports([...reports, { description }]);
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
          <p className="userName">Tiziana Tironi</p>
        </div>
        <div className="id">#122333</div>
      </div>
    
      <div className="description-report">
        {/* aca se utiliza el hook de arriba, se le pasa la funcion de onChange={setDescription} para el cambio de estado */}
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Ingrese la descripcion"></textarea>
      </div>
      
      <div className="lower-items">
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
          </ul>
          <div className="btn" onClick={createReports}>
            <button className="btn-public">Publicar</button>
          </div>
      </div>
    </div>
  );
};

export default PostMaker;
