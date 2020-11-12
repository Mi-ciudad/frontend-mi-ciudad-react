import React from "react";
import "./styles.scss";
import '../../assets/css/mobile.css';


import PhotoProfile from '../../assets/images/default-profile.png';


const PostList = ({ reports }) => {
  return (
    <div className="container-reports">
      {reports.map((report, index ) => {
        return (
          <div className="upload-report-rep">
            <div className="top-report">
              <div className="profile">
                <figure>
                  <img src={PhotoProfile} alt="Algo Lindo" />
                </figure>
                <p className="userName">{report.username}</p>
              </div>
              <div className="id">#122333</div>
            </div>

            <div className="description-report">
              <p>{report.descripcion}</p>
            </div>

            <div className="image-section">
            {report.image && (
                <img src={report.image} alt="report" style={{ width: 100, height: 100 }}  />
              )}
            </div>


            <div className="location-report" key={index}>
            {/* <i class="fas fa-map-marker-alt map-marker"></i> */}
              <p>{report.direccion}</p>
            </div>

            <div className="lower-items">
              <ul>
                <li>
                  <button>
                    <i class="fas fa-thumbs-up like"></i>
                  </button>
                </li>

                <li>
                  <button>
                    <i class="fas fa-comment comments"></i>
                  </button>
                </li>
                <li>
                  <button>
                  <i class="fas fa-trash"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
