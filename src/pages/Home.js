import React from 'react';
import Projects from '../projects/Projects'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {

    return (
        <>
        <div id="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 my-auto">
                        <div className="title">
                        <h1>Hi, my name is Justin</h1>
                     <h3>A web developer</h3>  
                        </div>
                    
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4 my-auto">
                    <p>Need a problem solver? I am passionate in this field and I have the talent to back it up with experience in headless cms, front end development, and design. I am a natural one man team but I thrive in team settings. Learn more <Link to="/about">about me</Link> or just get to the <a href="#projects">projects.</a></p>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </div>
        <Projects/>
        </>
    )
}

export default Home;