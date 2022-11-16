import React, { useRef ,useState} from 'react';
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [state]=useState();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rlzajsb', 'template_7trqg9h', form.current, 'OvmFGdkvpGep6OgmX');
      alert("Message Sent")
      window.location.reload();
      
  };
 

  return (
    <section id='contact_me'>

      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">

        <div className="contact__options">
          <article className='contact_option'>
            <HiOutlineMail className='icon'/>
            <h4>
              Email
            </h4>
            <h5>Hamza.Nazar009@gmail.com</h5>
            <a href='mailto:hamza.nazar009@gmail.com'>Send a Message</a>

          </article>
          <article className='contact_option'>
            <BsLinkedin  className='icon'/>
            <h4>
              LinkedIn
            </h4>
            <h5>www.linkedin.com/in/hamza-nazar-414797171/</h5>
            <a href='https://www.linkedin.com/in/hamza-nazar-414797171/'>Contact Me</a>

          </article>
          <article className='contact_option'>
            <BsWhatsapp  className='icon'/>
            <h4>
              Contact Number
            </h4>
            <h5>03155752096</h5>
            <a href='https://wa.me/923155752096'>Contact Me</a>

          </article>



        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Enter Your Fullname' required/> 
          <input type='email' name='email' placeholder='Enter Your Email' required/> 
          <textarea name='message' rows='7' placeholder='Enter Your Message' required></textarea>
          <button className='btn btn-primary' type='submit'>Send A Message</button>
          



        </form>
      </div>



    </section>
  )
}

export default Contact