import React, { useState } from "react";
import '../assets/css/generic.scss'
import HistoryData from "../components/HistoryData";

const historyFunction = () =>{
  //context de la cedula para persistir los datos.

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "ci": ci
    })
  };

    fetch('http://localhost:5000/history', requestOptions)
      .then(res => res.json())
      .then(result => {
        const results = result.data
        if (results.ci) {
          console.log(results.ci)
          setCi(results.ci)
        } else {
          console.log("Hubo un error")
          
        }
      })
      .catch(console.log(ci))






}


const Historial = () => {
    <HistoryData/>
  }

export default HistoryData;
