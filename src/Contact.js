import React, { useState } from 'react';
import './Contact.css'

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send email using a service like SendGrid or AWS SES
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    alert('Your message has been sent!');
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" value={message} onChange={(event) => setMessage(event.target.value)} required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
