import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { NavLink } from "react-router-dom";


function Footer() {

    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(false);
    const handleClose = () => setIsOpen(false);

   
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
            <div className="footer-section">
                <div className="footer-wrapper">
                    <div className="footer-background-folder">
                        <h2>Begin your journey</h2>
                        <span>Enquire online or contact of our travel consultants</span>
                        <div className="Get-Inspired-call-folder">
                            <div className="call-folder">
                                <a href="/"><i className="fa-solid fa-phone"></i></a>
                                <a href="tel:9987547773" className="call-btn">9987547773</a>
                            </div>
                            <div className="Appointment-folder">
                                <a href="/"><i className="fa-solid fa-arrow-right"></i></a>
                                <div className="btn">
                                <button
                                    className="Appointment-btn"
                                    onClick={handleOpen}
                                >
                               ENQUIRE
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
                                        
                                            <form
                                                ref={form}
                                                action=""
                                                onSubmit={sendEmail}
                                            >
                                            
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
                            </div>
                        </div>
                    </div>
                    <div className="footer-container-wrapper">
                        <div className="footer-conatiner">
                            <div className="footer-folder1">
                                <h2>Travleostyle</h2>
                                {/* <p>internatios is international, non profit, professional organization founded
                                    by a group
                                </p> */}
                                <div className="footer-iocn">
                                    <a href="/"><i className="fa-brands fa-facebook"></i></a>
                                    <a href="/"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="/"><i className="fa-brands fa-twitter"></i></a>
                                </div>
                            </div>
                            {/* <div className="footer-folder2">
                                <h2>Company</h2>
                                <a href="/">Business</a>
                                <a href="/">Compare</a>
                                <a href="/">Feature</a>
                                <a href="/">Pricing</a>
                            </div>
                            <div className="footer-folder2">
                                <h2>Search Ride</h2>
                                <a href="/">Business</a>
                                <a href="/">Compare</a>
                                <a href="/">Feature</a>
                                <a href="/">Pricing</a>
                            </div>
                            <div className="footer-folder2">
                                <h2>List a Ride</h2>
                                <a href="/">Business</a>
                                <a href="/">Compare</a>
                                <a href="/">Feature</a>
                                <a href="/">Pricing</a>
                            </div> */}
                        </div>
                        <span>Copyright @ 2023 | <NavLink to="/basicpage/terms-and-conditions">Terms and conditions</NavLink> | <NavLink to="/basicpage/privacy-policy">Privacy Policy</NavLink> | <NavLink to="/basicpage/refund-policy">Refund Policy</NavLink></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;