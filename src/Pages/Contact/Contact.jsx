import React from 'react'
import StyledContact from './StyledContact'

export default function Contact() {
  return (
    <StyledContact>

    <div className="container">
      <div>
        <a href = "mailto: mayurd0303@gmail.com" target="_blank" rel="noreferrer">
        <button className="contact" id="email">Send Email</button></a>
      </div>
      <div><a href="https://www.linkedin.com/in/mayur-dev/" target="_blank" rel="noreferrer">
        <button className="contact" id="linkedin">LinkedIn</button></a>
      </div>
      <div><a href="https://twitter.com/Bug_Buster_" target="_blank" rel="noreferrer">
        <button className="contact" id="twitter">Twitter</button></a>
      </div>
    </div>

    </StyledContact>
  )
}
