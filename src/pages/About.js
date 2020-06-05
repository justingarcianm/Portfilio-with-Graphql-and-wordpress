import React from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import './about.css'

const About = () => (
    <Query query={gql`
    {
        users(first: 1) {
          edges {
            node {
              firstName
              lastName
              description
              avatar {
                url
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
            console.log(data.users.edges[0].node.avatar.url)
            return(
                <div className="container" id="about">
                    <div className="row">
                        <div className="col-md-8">
                        <h1>About Justin</h1>
                            <div dangerouslySetInnerHTML={{ __html: data.users.edges[0].node.description }}/>
                        </div>
                        <div className="col-md-4">
                        <img src={data.users.edges[0].node.avatar.url} alt={data.users.edges[0].node.firstName} className="responsive-img z-depth-2"/>
                        </div>
                    </div>
                </div>
            )
        }
    }
    </Query>
    
    
)

export default About;

