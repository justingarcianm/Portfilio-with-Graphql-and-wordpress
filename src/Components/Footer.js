import React from 'react';
import ContactForm from './ContactForm'
import './footer.css'

const Footer = () => {
    return(
        <div id="contactWrapper">
            <div className="container">
            <ContactForm/>
            </div>
            <footer>
                <div className="container-fluid">
                <div className="row">
                    <div className="col-12 my-auto text-center">
                    <p>This site is powered by WordPress</p>
                    <p>Site created by Justin Garcia</p>
                    </div>
                </div>
                </div>
                
            </footer>
            
        </div>
    )
}

export default Footer;