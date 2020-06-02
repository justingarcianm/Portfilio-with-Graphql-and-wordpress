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
                    <h2>Footer</h2>
                    </div>
                </div>
                </div>
                
            </footer>
            
        </div>
    )
}

export default Footer;