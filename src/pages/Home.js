import React, { useState } from 'react';
import Projects from '../projects/Projects'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {

    const [ text, setText ] = useState(false)

    return(
        <>
        <div className="text-center" id="home">
            <div className="container">
            <div className="row">
                <div className="col my-auto">
                    <h1>Hi, my name is Justin</h1>
                    <h3>A web developer</h3>  

                    <div className={`textBlock ${text ? 'showText' : 'hideText'}`} >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet volutpat consequat mauris. Ornare suspendisse sed nisi lacus sed viverra tellus in. Sagittis orci a scelerisque purus semper eget duis at. Odio euismod lacinia at quis risus sed vulputate.</p>
                    <Link to='/about'>Read more about me!</Link>
                    </div>
                    <i 
                    className={`fas fa-chevron-down arrow ${text ? 'moveArrow' : ''}`}
                    onClick={() => setText(!text)}
                    ></i>
                </div>
            </div>
            </div>            
        </div>
        
        <Projects/>
        </>
    )
}

export default Home;