import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import emailjs from "@emailjs/browser";
import { FaUserAlt } from 'react-icons/fa';
import "react-toastify/dist/ReactToastify.css";
import { MdEmail } from 'react-icons/md'
import emailjs from "@emailjs/browser"

function ContactUs() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isValidEmail, setIsValidEmail] = useState(false)

  const notify = () => {
    toast.success("Your Request has been sent😊", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  function handleEmailChange(event) {
    const inputEmail = event.target.value
    setEmail(inputEmail)

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    setIsValidEmail(emailRegex.test(inputEmail))
  }

  function NameinputChange(e) {
    const inputText = e.target.value
    setName(inputText)
  }

  function MessageInputChange(e) {
    const inputText = e.target.value
    setMessage(inputText)
  }
  const form = useRef()
  const sendEmail = e => {
    e.preventDefault()
    if (isValidEmail) {
      emailjs
        .sendForm(
          "service_9spedfi",
          "template_juxtdiw",
          form.current,
          "JEUgk1jZnrZLqJz5k",
        )
        .then(
          result => {
            notify()
            console.log(result.text)
            setName("")
            setEmail("")
            setMessage("")
          },
          error => {
            console.log(error.text)
          }
        )
    } else {
      //   toast.error("Please enter a correct email value");
      console.log("Email is invalide")
    }
  }
  return (
    <>
      <div className="book-tour-section">
        <div className="booktourwrapper">
          <div className="book-tour-folder">
            <form ref={form} className="book-tour-form" onSubmit={sendEmail}>
              <h2>Book a Tour</h2>
              <p>
                Rationally encounter consequences that are extremely painful or
                again is there anyone.
              </p>
              <div className="input-contenar">
                <div className="input-folder">
                  <input
                    type="text"
                    className="inner-input"
                    placeholder="Your Name"
                    name="user_name"
                    required
                    value={name}
                    onChange={NameinputChange}
                  />
                  <a href="/" className="input-icons">
                    <FaUserAlt />
                  </a>
                </div>
                <div className="input-folder">
                  <input
                    type="email"
                    className="inner-input"
                    placeholder="Email Address"
                    name="user_email"
                    required
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <a href="/" className="input-icons">
                    <MdEmail />
                  </a>
                </div>
              </div>
              <textarea
                rows="4"
                cols="30"
                className="inner-Massege"
                placeholder="Your Massege..."
                name="message"
                required
                value={message}
                onChange={MessageInputChange}
              ></textarea>
              <div className="Book-tour-submit-btn-folder">
                <input type="submit" className="submit-btn" value="Send" />
              </div>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
