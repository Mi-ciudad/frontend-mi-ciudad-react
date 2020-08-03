import React, { useState } from "react";
import './styles.scss';

import PhotoProfile from '../../assets/images/fot-profil.png';


const PostMaker = ({ setReports, reports }) => {
  const [description, setDescription] = useState("");

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
