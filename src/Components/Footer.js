import React from 'react';
import ContactForm from './ContactForm'
import './footer.css'

const Footer = () => {
    const date = new Date().getFullYear()
    return(
        <div id="contactWrapper">
            <div className="container">
            <ContactForm/>
            </div>
            <footer>
                <div className="container-fluid">
                <div className="row">
                <div className="col-md-4 my-auto text-center">
                <p>&copy; Justin Garcia {date}</p>
                </div>
                    <div className="col-md-4 my-auto text-center">
                    <p>Congrats you've reached the Footer! Want a kick back to the top? <a href="#home">Click me.</a></p>
                    </div>
                    <div className="col-md-4 my-auto text-center">
                    <a href="https://github.com/justingarcianm" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    </div>
                </div>
                </div>
                
            </footer>
            
        </div>
    )
}

export default Footer;