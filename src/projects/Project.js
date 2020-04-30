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

    return(
                                        <div className="row project">
                                    <div className={ getClassName }>
                                    <img src={props.project.node.featuredImage.sourceUrl} 
                                        alt={props.project.node.featuredImage.altText}
                                        className="responsive-img z-depth-2"/>
                                    </div>
                                    <div className="col-md-6 order-md-2">
                                        <div className="divider"></div>
                                    <h3>{props.project.node.title}</h3>
                                    {props.project.node.content}
                                    <div className="row">
                                        <div className="col-6">
                                            <Link to={`${props.project.node.project_meta.githubLink}`}>
                                                <button className="btn btn-primary">Github</button>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                        <Link to={`${props.project.node.project_meta.liveSite}`}>
                                                <button className="btn btn-primary">Demo</button>
                                            </Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
    )
}

export default Project;