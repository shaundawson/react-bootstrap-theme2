import React, { Component } from "react";
import "./style.css";
import HubspotForm from 'react-hubspot-form';

const Contact = () => {
  return (
    <section>
    <div class="contact-form">
    <div class="row">
    <div class="col-md">
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
    
    <div class="col-md">
        <a class="twitter-follow-button"
        href="https://twitter.com/nandikayyy">
        </a>
        <a class="twitter-timeline" 
        data-width="300" 
        data-height="300"
        data-link-color="#f5a5b9" 
        data-tweet-limit="2"
        data-chrome=" nofooter noscrollbar noheader"
         href="https://twitter.com/nandikayyy?ref_src=twsrc%5Etfw">Tweets by nandikayyy</a> 
        </div>
    
    </div>





</div>
</section>
  );
};
export default Contact;