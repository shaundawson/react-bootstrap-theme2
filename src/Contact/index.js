import React, { Component } from "react";
import "./style.css";
import HubspotForm from 'react-hubspot-form';

const Contact = () => {
  return (
    <section>
    <div class="jumbotron-contact">
    <div class="contact-form">
    <center>
    <HubspotForm
portalId='5688825'
formId='44baf254-7849-4237-bfac-9378a2a80610'
onSubmit={() => console.log('Submit!')}
onReady={(form) => console.log('Form ready!')}
loading={<div>Loading...</div>}
/>
</center>
    </div>
    </div>
    
    
  






</section>
  );
};
export default Contact;


