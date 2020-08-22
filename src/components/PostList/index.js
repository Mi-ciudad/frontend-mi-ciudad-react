import React, { useContext } from "react";
import "./styles.scss";
import '../../assets/css/mobile.css';


import PhotoProfile from "../../assets/images/fot-profil.png";
import { UserContext } from "../../context/User";

const PostList = ({ reports }) => {
  const context = useContext(UserContext);

  return (
    <div className="container-reports">
      {reports.map((report) => {
        return (
          <div className="upload-report">
            <div className="top-report">
              <div className="profile">
                <figure>
                  <img src={PhotoProfile} alt="Algo Lindo" />
                </figure>
                <p className="userName">{context.user}</p>
              </div>
              <div className="id">#122333</div>
            </div>

            <div className="description-report">
              <p>{report.description}</p>
              {report.image && (
                <img src={report.image} style={{ width: 200, height: 200 }} />
              )}
            </div>

            <div className="lower-items">
              <ul>
                <li>
                  <a href="#">
                    <i class="fas fa-thumbs-up like"></i>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i class="fas fa-comment comments"></i>
                  </a>
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
