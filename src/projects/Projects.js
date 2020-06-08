import React from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Project from './Project'
import './projects.css'

const Projects = () => (
    <Query query={gql`
    {
        projects {
          edges {
            node {
              title
              date
              content
              featuredImage {
                altText
                sourceUrl
              }
              project_meta {
                githubLink
                liveSite
              }
            }
          }
        }
      }
    `}>
        {
            ({ loading, error, data }) => {
                if( loading ) {
                    return (
                      <div className="loading row">
                        <div className="col my-auto text-center">
                        <h2>Loading...</h2>
                        </div>
                        
                      </div>
                    )
                }
                return(
                    <div id="projects">
                      <div className="container text-center">
                        <div className="row fixedHeight">
                          <div className="col-md-4 my-auto">
                          <h2 className="projects-header">Projects</h2>
                          </div>
                          <div className="col-md-8 projectWrapper">
                          {data.projects.edges.map( (project,key) =>  <Project key={key} project={project} number={key}/> )}
                          </div>
                        </div>
                   </div>
                </div>
                )
                // return(
                //     <div id="projects">
                //       <div className="container text-center">
                //     <h2 className="secondary-header">Projects</h2>
                //         {data.projects.edges.map( (project,key) =>  <Project key={key} project={project} number={key}/> )}
                //    </div>
                // </div>
                // )
            }
        }
    </Query>
)


export default Projects;