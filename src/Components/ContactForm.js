import React, { useState } from 'react';
import Axios from 'axios'
import './contactForm.css'

const ContactForm = () => {
    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
    const [ message, setMessage ] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email,name,message)

        let formData = new FormData()
        formData.set("your-name", name)
        formData.set("your-email", email)
        formData.set("your-message", message)

        Axios
        .post(
          `http://justins-portfolio.local/wp-json/contact-form-7/v1/contact-forms/23/feedback`,
          formData,
          {
            headers: {
              "content-type": "multipart/form-data",
            }
          }
        )
        .then(res => {
          res.data.status === "mail_sent" ? clearState() : console.log("error: " + res.data.message)
        })
    }

    const clearState = () => {
      setEmail('')
      setName('')
      setMessage('')
    }

    return (
        <div id="contactForm">
             <h2>Contact Me</h2>
<div className="row">
    <div className="col-2"></div>

    <div className="col-8">

    <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>

    <input 
    type="email" 
    className="form-control" 
    value={email} 
    onChange={e => setEmail(e.target.value)} 
    placeholder="Enter email"
    />

  </div>
  <div className="form-group">
    <label htmlFor="name">Name</label>

    <input 
    type="text" 
    className="form-control" 
    value={name} 
    onChange={e => setName(e.target.value)} 
    placeholder="Name"
    />

  </div>

  <div className="form-group">
    <label htmlFor="message">Leave me a message</label>

    <textarea 
    className="form-control" 
    value={message} 
    onChange={e => setMessage(e.target.value)} 
    rows="3"></textarea>

  </div>

  <div className="form-check">

    <input 
    type="checkbox" 
    className="form-check-input" 
    id="exampleCheck1"
    />

    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>

    <div className="col-2"></div>
</div>

        </div>
   
    )
}

export default ContactForm