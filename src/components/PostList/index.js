import React from 'react';
import './styles.scss';

import PhotoProfile from '../../assets/images/fot-profil.png';


const PostList = ({reports}) =>  {
        
        return (    
           <div className="container-reports">
               {reports.map((report)=> {
                   return(
                       <div className="upload-report">
                           <div className="top-report">
                                <div className="profile">
                                <figure>
                                    <img src={PhotoProfile} alt='Algo Lindo' />                
                                </figure>
                                </div>
                                <div className="id">#122333</div>
                            </div>

                            <div className="description-report">
                                <p>
                                {report.description}
                                </p>
                           </div>

                           <div className="lower-items">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i class="fas fa-thumbs-up like"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <i class="fas fa-comment comments"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                       </div>
                   )
               } )}
           </div>
        )


}

export default PostList;