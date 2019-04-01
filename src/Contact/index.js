import React, { Component } from "react";
import "./style.css";
import HubspotForm from 'react-hubspot-form';

const Contact = () => {
  return (
    <section>
    <div class="contact-form">
    <div class="row">
    <div class="col-md contact-column">
    <h4 class="h4-responsive  my-4">Send a message</h4>
    <div className="form-container">
    <HubspotForm
    portalId='5429329'
    formId='b05dd7e5-19b3-4319-86be-067a50eb83ec'
    onSubmit={() => console.log('Submit!')}
    onReady={(form) => console.log('Form ready!')}
    loading={<div>Loading...</div>}
    />
    </div>
    </div>
    
    
    </div>





</div>
</section>
  );
};
export default Contact;