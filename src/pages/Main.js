import React, { useState } from "react";
import PostMaker from "../components/PostMaker";
import PostList from "../components/PostList";
import '../assets/css/generic.scss'

const Main = () => {

  const [reports, setReports] = useState([]);  

    return (
      <div className="content-generics">
        <PostMaker reports={reports} setReports={setReports}/>
        <PostList reports={reports}/>
      </div>
    );
  }

export default Main;
