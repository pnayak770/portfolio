import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0fses0v', 'template_c4q8eul', form.current, {
        publicKey: 'm5JKWWCA8yWOxPs3y',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='main'>
      <h3>Contact</h3>

    <form ref={form} onSubmit={sendEmail}>
      {/* <label>Your Name</label> */}
      <input type="text" name="user_name" placeholder='Enter Your Name' />
      {/* <label>Your Email</label> */}
      <input type="email" name="user_email" placeholder='Enter Your Email'/>
      {/* <label>Message</label> */}
      <textarea name="message" placeholder='Write your message here...'/>
      <input type="submit" value="Send" className='button'/>
    </form>
    </div>
    
  );
};


export default Contact;