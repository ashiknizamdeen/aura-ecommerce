import React from 'react';
import '../styles/ContactPage.css';

const ContactPage = () => {
  return (
    <section className="section contact-page" aria-label="contact">
      <div className="container">
        <h1 className="h2 section-title title text-center">Get in Touch</h1>
        <p className="contact-intro text-center">
          Have questions or need assistance? Feel free to reach out to us!
        </p>

        <div className="contact-grid">
          <div className="contact-info-card">
            <h3 className="h3 title">Our Office</h3>
            <p>123 Modern Ave, Fashion City, FC 12345</p>
            <p>United Kingdom</p>
            <h3 className="h3 title">Email Us</h3>
            <p><a href="mailto:info@aurashop.com">ashikshaheed4@gmail.com</a></p>
            <h3 className="h3 title">Call Us</h3>
            <p><a href="tel:+1234567890">+9477 558 9559</a></p>
          </div>

          <form className="contact-form">
            <h3 className="h3 title">Send Us a Message</h3>
            <input type="text" placeholder="Your Name" className="input-field" required />
            <input type="email" placeholder="Your Email" className="input-field" required />
            <textarea placeholder="Your Message" className="input-field textarea" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
