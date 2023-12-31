import React from 'react'
import "./ContactUs.css"
function ContactUs() {
  return (
    <div className='container pt-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 mr-auto'>
            <h1>How Can we Help?</h1>
            <p className='info'>Please specify the problem you fact while using this application in the message section. If you don't find what you need, fill out our contact form. Contact us for more information </p>
            <ul className="details">
              <li className="d-flex text-black mb-2">
                <span className="mr-3"><span className="fa fa-map-marker px-2"></span></span>  Bachupally , Hyderabad, India
              </li>
              <li className="d-flex text-black mb-2">
                <span className="mr-3">
                  <span className="fa fa-phone px-2"></span>
                  </span> 040-3456-7098
              </li>
              <li className="d-flex text-black">
                <span className="mr-3">
                  <span className="fa fa-envelope px-2"></span>
                </span> covid_tracker@gmail.com 
                </li>
            </ul>
          </div>
          <div className="col-md-6">
            <form className="mb-5" method="post" id="contactForm" name="contactForm" novalidate="novalidate">
              <div className="row">
                <div className="col-md-12 form-group">
                  <label for="name" className="col-form-label">Name</label>
                  <input type="text" className="form-control" name="name" id="name"/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group">
                  <label for="email" className="col-form-label">Email</label>
                  <input type="text" className="form-control" name="email" id="email"/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group">
                  <label for="message" className="col-form-label">Message</label>
                  <textarea className="form-control" name="message" id="message" cols="30" rows="7"></textarea>
                </div>
              </div>
              <div className="row">
                <div className='text-center p-3 col-md-12'>
                  <input type="submit" value="Submit" className="btn btn-primary rounded py-2 px-4"/>
                  <span className="submitting"></span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ContactUs
