import React, { useState, useEffect } from "react";
import PostMaker from "../components/PostMaker";
import PostList from "../components/PostList";
import PostListComp from "../components/PostLIstComponent";
import "../assets/css/generic.scss";

const Main = () => {

  const [reports, setReports] = useState([]);
 
  const getReports = () => {
    const requestOptions = {
      method: "GET",
    };

    try {
      fetch("http://localhost:5000/reports", requestOptions)
        .then((res) => res.json())
        .then(
          (result) => {
            if (result.status === 200) {
              setReports(result.reportes);
            } else {
              console.log("Algo salio mal, verificar");
              console.log(result.status);
            }
          },
          (error) => {
            console.log(error);
          }
        )
        .catch(console.log());
    } catch (error) {
      console.log(error);
    }
  };


    useEffect(() => {
      // code to run on component mount
      getReports();
    }, [])

  return (
    <div className="content-generics">
      <PostMaker reports={reports} setReports={setReports} /> 
      <PostList reports={reports} />
      <div className ="upload-report">
        {reports.map((report) => (
          <PostListComp
            user={report.ci}
            description={report.descripcion}
            location={report.direccion}
          ></PostListComp>
        ))}
      </div>
    </div>
  );
};

export default Main;
