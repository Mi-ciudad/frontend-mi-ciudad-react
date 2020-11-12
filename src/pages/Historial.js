import React, { useState,useEffect } from "react";
import '../assets/css/generic.scss'
import HistoryData from "../components/HistoryData";
import jwt_decode from "jwt-decode";


const Historial = () => {

const [reports, setReports] = useState([])

const historyFunction = () =>{
  
  const requestOptions2 = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "ci": jwt_decode(localStorage.getItem("token")).ci
    })
  };


  fetch('http://10.1.14.80:5000/history', requestOptions2)
    .then(res => res.json())
    .then((result) => {
      const reportes = result.reportes;
      if (result.status === 200) {
        setReports(reportes)
      } else {
        console.log("Hubo errores verificar")
        console.log(result.status)
      }
    },

      (error) => {
        console.log(error);
      }
    )
    .catch(console.log(requestOptions2))
}
 
    
useEffect(() => {
  // code to run on component mount
  historyFunction();

}, [])

    return (
      <div>
      <HistoryData reports={reports}> </HistoryData>
      </div>
    )

  
}

export default Historial;
