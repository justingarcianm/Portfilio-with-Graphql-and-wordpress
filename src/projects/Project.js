import React from 'react';
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
    // return(
    //                                     <div className="row project">
    //                                 <div className={`imgSpacing ${getClassName} `}>
    //                                 <img src={featuredImage.sourceUrl} 
    //                                     alt={featuredImage.altText}
    //                                     className="responsive-img z-depth-2"/>
    //                                 </div>
    //                                 <div className="col-md-6 order-md-2">
                                       
    //                                 <h3>{title}</h3>
    //                                 <div className="divider"></div>
    //                                 <br/>
    //                                 <div dangerouslySetInnerHTML={{ __html: content }} />
    //                                 <div className="row">
    //                                     <div className="col-6">
    //                                         <a href={`${project_meta.githubLink}`} target="_blank" rel="noopener noreferrer">
    //                                             <button className="btn btn-primary">Github</button>
    //                                         </a>
    //                                     </div>
    //                                     <div className="col-6">
    //                                     <a href={`${project_meta.liveSite}`} target="_blank" rel="noopener noreferrer">
    //                                             <button className="btn btn-primary">Demo</button>
    //                                         </a>
    //                                     </div>
    //                                 </div>
    //                                 </div>
    //                             </div>
    // )
    return (
        <div className="project">
            <h3 className="secondary-header">{title}</h3>
                <img 
                src={featuredImage.sourceUrl} 
                alt={featuredImage.altText}
                className="responsive-img z-depth-2"/>
                <div className="colorBar"></div>
                <div dangerouslySetInnerHTML={{ __html: content }} />
                <div className="row">
                                     <div className="col-6">
                                             <a href={`${project_meta.githubLink}`} target="_blank" rel="noopener noreferrer">
                                                 <button className="btn btn-primary">Github</button>
                                             </a>
                                         </div>
                                         <div className="col-6">
                                         <a href={`${project_meta.liveSite}`} target="_blank" rel="noopener noreferrer">
                                                 <button className="btn btn-primary">Demo</button>
                                             </a>
                                         </div>
                                    </div>
        </div>
    )
}

export default Project;