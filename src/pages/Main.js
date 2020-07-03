import React from 'react'
import UploadReport from "../components/UploadReport"
import PublicReport from "../components/PublicReport"




class Main extends React.Component {

  //el padre tiene el array y los metodos y se los da a los hijos

  state = {
    arrayReport: [
      {
        descripcion: "Hola",
        ubicacion: "Mundo",
      },
    ],

  };

  newReport = (descripcion, ubicacion) => {
    //creamos el objeto con los datos del form enviados como parametros de un metodo y lo pusheamos al array
    
    var reportItem = {
      descripcion: descripcion,
      ubicacion:ubicacion
    };

    console.log(reportItem.descripcion)
    console.log(reportItem, "item nuevo");
    this.state.arrayReport.push(reportItem);
    console.log(this.state.arrayReport, "array");
  };

  render() {
    return (
      <div className="report-section">
        {/*<BtnBuscar></BtnBuscar>*/}
        <UploadReport newReport={this.newReport.bind()} ></UploadReport>
        <PublicReport ></PublicReport>

      </div>
    )
  }



}
export default Main ; 
