import React from 'react';
import { Link } from 'react-router-dom'
import './project.css'

const Project = (props) => {
    // returns true or false
    const getNum = num => {
        return num % 2 === 0
    };
    // sets className depending on true/false
    const getClassName = getNum(props.number) ? `col-md-6 order-md-1` : `col-md-6 order-md-3`
    //  deconstructs props for fun
    const { title, content, featuredImage, project_meta } = props.project.node
    return(
                                        <div className="row project">
                                    <div className={ getClassName }>
                                    <img src={featuredImage.sourceUrl} 
                                        alt={featuredImage.altText}
                                        className="responsive-img z-depth-2"/>
                                    </div>
                                    <div className="col-md-6 order-md-2">
                                        <div className="divider"></div>
                                    <h3>{title}</h3>
                                    <div dangerouslySetInnerHTML={{ __html: content }} />
                                    <div className="row">
                                        <div className="col-6">
                                            <Link to={`${project_meta.githubLink}`}>
                                                <button className="btn btn-primary">Github</button>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                        <Link to={`${project_meta.liveSite}`}>
                                                <button className="btn btn-primary">Demo</button>
                                            </Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
    )
}

export default Project;