import React, { useState } from "react";
import './styles.scss';

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
    <div className="profile">
        <figure>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQG_I-Df7T2sRQ/profile-displayphoto-shrink_400_400/0?e=1601510400&v=beta&t=0S3y1fqzlSjpjEClXTrtPv8lqKZy34O82-98QPfL6ZU"></img>
        </figure>
    </div>
      <div className="description-report">
        <textarea value={description} onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="btn" onClick={createReports}>
        <button className="btn-public">publicar</button>
      </div>
    </div>
  );
};

export default PostMaker;
