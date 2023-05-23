import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import emailjs from "@emailjs/browser";
import { FaUserAlt } from 'react-icons/fa';
import "react-toastify/dist/ReactToastify.css";
import { MdEmail } from 'react-icons/md'
import emailjs from "@emailjs/browser"

const TourRightSidebar = () => {
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
      <div className="Right_tour">
        <div className="price_right">
          <i className="fa-solid fa-tag"></i>
          <span>From:</span>
          <h2>$1,900</h2>
        </div>
        {/* <form action="">
          <label htmlFor="">Pick Up Date</label>
          <input type="date" />
          <label htmlFor="">Person(s)</label>
          <input type="number" min="1" />
          <input type="submit" value="Book This Tour" />
        </form> */}
          <form ref={form} onSubmit={sendEmail}>
              <div>
                <div>
                  <input
                    type="text"
                   
                    placeholder="Name"
                    name="user_name"
                    required
                    value={name}
                    onChange={NameinputChange}
                  />
                  {/* <a href="/" className="input-icons">
                    <FaUserAlt />
                  </a> */}
                </div>
                <div>
                  <input
                    type="email"
                   
                    placeholder="Email"
                    name="user_email"
                    required
                    value={email}
                    onChange={handleEmailChange}
                  />
                  {/* <a href="/" className="input-icons">
                    <MdEmail />
                  </a> */}
                </div>
              </div>
              <textarea
                rows="4"
                cols="30"
               
                placeholder="Your Massege..."
                name="message"
                required
                value={message}
                onChange={MessageInputChange}
              ></textarea>
              <div>
                <input type="submit" className="submit-btn" value="Book a Tour" />
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
        <div className="support">
          <div>
            <h3>Custumer Support</h3>
            <p>9987547773</p>
            <p>Talktous@example.com</p>
            <p>09:00am ~ 06:00pm (Mon to Fri)</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourRightSidebar;
