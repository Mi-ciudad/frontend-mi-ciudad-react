import React, { useState } from "react";
import PostMaker from "../components/PostMaker";
import PostList from "../components/PostList";
import '../assets/css/generic.scss';

const Main = () => {
  const arrayReports = []
  const [reports, setReports] = useState([]);  


  const getReports = () => {
    const requestOptions = {
      method: 'GET'
    };

    fetch('http://localhost:5000/reports',requestOptions)
    .then (res => res.json())
    .then ((result) => {
      if(result.status === 200){
        console.log("Funciona bien")
        arrayReports.push(result.data.reportes)
        console.log(arrayReports)
      }else{
        console.log("Algo salio mal, verificar")
        console.log(result.status)
      }
    },
      (error) => {
        console.log(error)
      }
    )
    .catch(console.log())
    }
    return (
      <div className="content-generics">
        <PostMaker reports={reports} setReports={setReports}/>
        <PostList reports={reports}/>
        <button onClick={getReports}></button>
      </div>
    );
  }

export default Main;
