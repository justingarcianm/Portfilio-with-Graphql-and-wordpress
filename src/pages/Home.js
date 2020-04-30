import React from 'react';
import Projects from '../projects/Projects'
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div>
            <h2>Intro</h2>
            <Link to='/about'>Read more about me!</Link>
            <Projects/>
        </div>
    )
}

export default Home;