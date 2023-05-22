import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import TourRightSidebar from "./TourRightSidebar";
import { useParams } from "react-router-dom";
import client from "../Client";
import image from '../images/closeup-pins-map-planning-travel-journey.jpg'

const TourCardDetailsNew = () => {
  const { slug } = useParams();
  const [entry, setEntry] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [NewpackageTitle, SetNewpackageTitle] = useState("");
  const [message, setMessage] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    const fetchdetailsPage = async () => {
      try {
        const response = await client.getEntries({
          content_type: "package",
          "fields.slug": slug,
        });
        if (response.items.length) {
          setEntry(response.items);
          console.log(response.items);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchdetailsPage();
  }, [slug]);
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
    const inputEmail = event.target.value;
    setEmail(inputEmail);

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    setIsValidEmail(emailRegex.test(inputEmail));
  }

  function NameinputChange(e) {
    const inputText = e.target.value;
    setName(inputText);
  }

  function MessageInputChange(e) {
    const inputText = e.target.value;
    setMessage(inputText);
  }
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    if (isValidEmail) {
      emailjs
        .sendForm(
          "service_9spedfi",
          "template_juxtdiw",
          form.current,
          "JEUgk1jZnrZLqJz5k"
        )
        .then(
          (result) => {
            notify();
            console.log(result.text);
            setName("");
            setEmail("");
            setMessage("");
            SetNewpackageTitle("");
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.log("Email is invalide");
    }
  };

  return (
    <>
      <section className="Tour_details">
        <div className="nav_bar">
          <div className="container">
            <div className="d_flex">
              <div className="nav_title">
                <h2 className="tour_title">Brazil</h2>
              </div>
              <span className="tour_nav">
                <a href="#main">Main information</a>
                <a href="#map">Map</a>
              </span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="tour-left-content">
            <div className="left_wrapper">
              <div className="d-flex">
                <div className="box">
                  <FontAwesomeIcon icon={faClock} />
                  <p className="tour-desc-text">6 Days</p>
                </div>
                <div className="box">
                  <FontAwesomeIcon icon={faClock} />
                  <p className="tour-desc-text">6 Days</p>
                </div>
                <div className="box">
                  <FontAwesomeIcon icon={faClock} />
                  <p className="tour-desc-text">6 Days</p>
                </div>
              </div>
              <div className="main_info" id="main">
                <div className="content">
                  <h3>Main info</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur, voluptates. Similique iure voluptas neque
                    reprehenderit accusantium officia maiores, itaque repellat
                    iusto eligendi ullam ex corporis, ab maxime omnis fugit.
                    Harum.
                  </p>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  {/*  */}
                  {entry &&
                    entry.map((info, i) => {
                      const { packageTitle, packageStartingPrice } = info.fields;
                      // const id = info.fields.sys; // This line seems incorrect
                      
                      // Assign a unique identifier as the key, such as info.fields.sys.id
                      const key = info.sys.id; // Replace info.fields.sys with the correct identifier
                      
                      return (
                        <React.Fragment key={key}>
                          <div className="btn">
                            <button
                              className="tour-query-btn"
                              onClick={handleOpen}
                            >
                              Submit Query
                            </button>
                            {isOpen && (
                              <div className="popup">
                                <div className="popup-content">
                                  <button
                                    className="close-btn"
                                    onClick={handleClose}
                                  >
                                    &times;
                                  </button>
                                  <h1>{packageTitle}</h1>
                                  <span>$ {packageStartingPrice}</span>
                                  <form
                                    ref={form}
                                    action=""
                                    onSubmit={sendEmail}
                                  >
                                    <input
                                      type="text"
                                      value={packageTitle}
                                      onChange={NewpackageTitle}
                                      hidden
                                    />
                                    <label htmlFor="name">Name:</label>
                                    <input
                                      type="text"
                                      id="name"
                                      name="name"
                                      value={name}
                                      onChange={NameinputChange}
                                      required
                                    />
                                    <label htmlFor="email">Email:</label>
                                    <input
                                      type="email"
                                      id="email"
                                      name="email"
                                      value={email}
                                      onChange={handleEmailChange}
                                      required
                                    />
                                    <label htmlFor="message">Message:</label>
                                    <textarea
                                      id="message"
                                      value={message}
                                      name="message"
                                      onChange={MessageInputChange}
                                      required
                                    ></textarea>
                                    <button type="submit">Submit</button>
                                  </form>
                                </div>
                              </div>
                            )}
                          </div>
                        </React.Fragment>
                      );
                    })}

                  {/*  */}
                </div>
              </div>
              <div className="map" id="map">
                <div className="content">
                  <h3>Map</h3>
                </div>
                {/* <iframe
                  width="100%"
                  title="map"
                  height="480"
                  src="https://maps.google.com/maps?hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe> */}
                <img src={image} alt="map" />
              </div>
            </div>
            <TourRightSidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default TourCardDetailsNew;
