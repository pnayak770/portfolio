import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion';
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
    <motion.div
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >

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
  </motion.div>
    
  );
};


export default Contact;