import React, { useContext } from "react";
import './styles.scss';
import jwt_decode from "jwt-decode";

import PhotoProfile from "../../assets/images/default-profile.png";

const HistoryData = ({ reports }) => {

  return (
    <div>
  
      {reports.map((report, index) => {
        return (
          <section className="presentation">
          <div className="content">
            <div className="report-card">
              <div className="top-report">
                <div className="profile">
                  <figure>
                    <img src={PhotoProfile} alt="Algo Lindo" />
                  </figure>
                  <p className="userName" key={index}>Publicado por @{jwt_decode(localStorage.getItem("token")).email}</p>
                  <p className="description">{report.descripcion}</p>
                  <p className="report-state">{report.estado}</p>
                </div>
                <div className="id">{report.id}</div>

              </div>
            </div>
          </div>
         </section>
        )
      })

      }
     
      </div>
  )
}
export default HistoryData;