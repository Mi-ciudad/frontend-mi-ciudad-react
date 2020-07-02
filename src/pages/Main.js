import React from 'react'
import UploadReport from "../components/UploadReport"
import PublicReport from "../components/PublicReport"

class Main extends React.Component{

render(){
    return(
        <div className="report-section">
          {/*<BtnBuscar></BtnBuscar>*/}
          <UploadReport></UploadReport>
          <PublicReport></PublicReport>
        </div>
    )
}


    
}
export default Main;