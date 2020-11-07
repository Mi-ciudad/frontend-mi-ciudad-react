import React, { useState, useEffect } from "react";
import PostMaker from "../components/PostMaker";
import PostList from "../components/PostList";
import "../assets/css/generic.scss";

const Main = () => {

  const [reports, setReports] = useState([]);
 
  const getReports = () => {
    const requestOptions = {
      method: "GET",
    };

      fetch("http://localhost:5000/reports", requestOptions)
        .then(result => result.json())
        .then(data => {
          const reports = data.reportes;
          try {
            setReports(reports);
          } catch (error) {
            console.log(error)
          }
        })
        .catch(console.log());
    
  };


    useEffect(() => {
      // code to run on component mount
      getReports();
  
    }, [])

  return (
    <div className="content-generics">
      <PostMaker reports={reports} setReports={setReports} /> 
      
      <div className = "upload-report">
        <PostList reports={reports}></PostList>
      </div>
    </div>
  );
};

export default Main;
