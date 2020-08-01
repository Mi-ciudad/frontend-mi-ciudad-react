import React from 'react';
import './styles.scss';

const PostList = ({reports}) =>  {
        
        return (    
           <div className="container-reports">
               {reports.map((report)=> {
                   return(
                       <div className="upload-report">
                           {report.description}
                       </div>
                   )
               } )}
           </div>
        )


}

export default PostList;