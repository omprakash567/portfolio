import React from 'react'

function Contact_Task() {
  return (
    <div>
      <h1>Contact Me</h1>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" /><br/><br/>
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" /><br/><br/>
        <label>Message:</label>
        <textarea placeholder="Enter your message" /><br/><br/>
        <button type="submit">Send Message</button>
      </form>
      
    </div>
  )
}

export default Contact_Task