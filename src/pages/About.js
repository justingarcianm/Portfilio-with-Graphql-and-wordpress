import React from 'react';
import './about.css'


const About = () => {
    return(
        <div className="container" id="about">
            <h1>About Me</h1>
            <div className="row">
                <div className="col-8">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet volutpat consequat mauris. Ornare suspendisse sed nisi lacus sed viverra tellus in. Sagittis orci a scelerisque purus semper eget duis at. Odio euismod lacinia at quis risus sed vulputate.</p>
                </div>
                <div className="col-4">
                <img src="http://justins-portfolio.local/wp-content/uploads/2020/04/portrait-photo-of-smiling-man-with-his-arms-crossed-standing-2379004.jpg" alt="me" className="responsive-img z-depth-2"/>
                </div>
            </div>
        </div>
    )
}

export default About;