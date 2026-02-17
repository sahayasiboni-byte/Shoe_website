import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6"
import contactmodule from './Contact.module.css'
import contactimg from '../../assets/contact.png'

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false) 

  const validate = () => {
    const newError = {}

    if (!name.trim()) newError.name = '*Name is required'

    if (!email.trim()) {
      newError.email = '*Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newError.email = '*Enter a valid email'
    }

    if (!message.trim()) newError.message = '*Message is required'

    setError(newError)
    return Object.keys(newError).length === 0
  }

  const handleSubmit = () => {
    if (!validate()) return

    setSending(true)

    // simulate API call
    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
      setName('')
      setEmail('')
      setMessage('')
      setError({})
    }, 1500)
  }

  return (
    <div className={contactmodule.contactcotainer}>
      <h1>Contact Now</h1>

      <div className={contactmodule.contactbox}>
        <div className={contactmodule.form}>
          <h3>Send a line about your project</h3>

          {submitted ? (
            <div className={contactmodule.successBox}>
              Thank you! Your message has been sent!
            </div>
          ) : (
            <div className={contactmodule.contactcontent}>
              <div>
                <p>Name</p>
                <input className={contactmodule.input}
                  type="text"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}/>
                {error.name && <span className={contactmodule.error}>{error.name}</span>}

                <p>Email Address</p>
                <input className={contactmodule.input}
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="new-password"/>
                {error.email && <span className={contactmodule.error}>{error.email}</span>}

                <p>Your Message</p>
                <input className={contactmodule.input}
                  type="text"
                  placeholder="Enter Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                {error.message && <span className={contactmodule.error}>{error.message}</span>}
              </div>

              <div className={contactmodule.contactbutton}>
                <button onClick={handleSubmit} disabled={sending}>
                  {sending ? 'Sending...' : <>Send Now <FaArrowRight /></>}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className={contactmodule.contactimg}>
          <img src={contactimg} alt="contact" />
        </div>
      </div>
    </div>
  )
}

export default Contact
