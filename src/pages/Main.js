import React from "react";
import UploadReport from "../components/UploadReport";
import PublicReport from "../components/PublicReport";

class Main extends React.Component {
  //el padre tiene el array y los metodos y se los da a los hijos

  state = {
    arrayReport: [
      {
        descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        ubicacion: "Montevideo,Montevideo Uruguay"
      }
    ]
  };

  newReport = (descripcion, ubicacion) => {
    //creamos el objeto con los datos del form enviados como parametros de un metodo y lo pusheamos al array

    var reportItem = {
      descripcion: descripcion,
      ubicacion: ubicacion,
    };

    console.log(reportItem.descripcion);
    console.log(reportItem, "item nuevo");
    this.setState({
      arrayReport: [...this.state.arrayReport, reportItem]
    })
    console.log(this.state.arrayReport, "array");
  };

  render() {

    const report = this.state.arrayReport;

    return (
      <div className="report-section">
        {/*<BtnBuscar></BtnBuscar>*/}
       
        <UploadReport newReport={this.newReport.bind(this)}></UploadReport>
       
        <div className=""> 
          {report.map((reporte, key) => {
            return (
              <PublicReport key={key} descripcion={reporte.descripcion} ubicacion={reporte.ubicacion} />
              )
          })

          }

        </div>

      </div>
    );
  }
}
export default Main;
