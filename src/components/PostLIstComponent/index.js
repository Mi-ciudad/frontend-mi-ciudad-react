import React from 'react'
import './styles.scss'

class PostListComp extends React.Component {
    render() {
        return (
            <div className="upload-report">
                <div className="top-report">
                    <div className="profile">
                        <figure>
                            <img src={this.props.profilePhoto} alt="Algo Lindo" />
                        </figure>
                        <p className="userName">{this.props.user}</p>
                    </div>
                    <div className="id">#122333</div>
                </div>

                <div className="description-report">
                    <p>{this.props.description}</p>

                </div>

                <div className="image-section">
                    {/*report.image && (
                        <img src={"https://google.com/images11111"} alt="report" style={{ width: 100, height: 100 }} />
                    )*/}
                </div>
                <div className="location-report">
                    {/* <i class="fas fa-map-marker-alt map-marker"></i> */}
                    <p>{this.props.location}</p>
                </div>

                <div className="lower-items">
                    <ul>
                        <li>
                            <button>
                                <i class="fas fa-thumbs-up like"></i>
                            </button>
                        </li>

                        <li>
                            <button>
                                <i class="fas fa-comment comments"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default PostListComp
































