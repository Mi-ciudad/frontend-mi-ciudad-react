import React, { useContext } from "react";
import './styles.scss';

import PhotoProfile from "../../assets/images/fot-profil.png";
import { UserContext } from "../../context/User";

const HistoryData = () =>  {
    const context = useContext(UserContext);
        return (
          <section className = "presentation">
            <div className = "content">
                <div className="report-card">
                  <div className="top-report">
                    
                    <div className="profile">
                      
                      <figure>  
                          <img src={PhotoProfile} alt="Algo Lindo" />
                      </figure>
                      <p className="userName">Publicado por @Tiziana {context.user}</p>
                      <p className="date">El dia 3 de julio de 2020</p>
                      <p className ="report-state">Aprobado</p>
                    </div>
                    <div className="id">#122333</div>
                    
                  </div>
                </div>       
            </div>
          </section>
          
                            
        )}
export default HistoryData;