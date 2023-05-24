import React, { useState, useEffect } from "react";
import banner_mobile from '../images/banner-mobile-image.jpg';
import travelImage from '../images/ezgif.com-crop (1).gif'
import client from '../Client';
import banner_video from "../assets/video/pexels.mp4"
import { Link } from "react-router-dom";

function Banner() {
  const [checked, setChecked] = useState(true);
  const [entry, setEntry] = useState([]);
    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await client.getEntries({
                    content_type: "banner",
                });
                console.log()
                console.log(response)
                if (response.items.length) {
                    setEntry(response.items);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchPage();
    
    }, []);
    return (
        <>
            {
                entry.map((item) => {
                    const { title, description, leftTitle, linkField, rightTitle } = item.fields;
                    const imageUrl = (item.fields.image.fields.file.url);
                    const id = item.sys.id
                    return (
                        <React.Fragment key={id}>
                            <div className="banner-section">
                                <div className="banner-wrapper curtain">
                                    <div className="banner-container curtain__wrapper">
                                        <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
                                        <video className="banner-image curtain__content" controls="controls" autoplay="autoplay" muted="muted" loop>
                                            <source src={banner_video} type="video/mp4"/>
                                        </video>
                                        <div className="banner-image banner-mobile curtain__content">
                                            <img src={banner_mobile} alt="banner-image" />                                         </div>
                                        <div className="banner-left-section curtain__panel curtain__panel--left">
                                            <h2 className="banner-title">{leftTitle}</h2>
                                            <div className="banner-des-conatiner">
                                                <div className="banner-des-folder2">
                                                    <h2>{title}</h2>
                                                    <p>{description}</p>
                                                  <Link to='/basicpage/about-us-detials'>{linkField}</Link> 
                                                </div>
                                            </div>
                                        </div>
                                        <div className="banner-right-image">
                                            <img src={travelImage} alt=""></img>
                                        </div>
                                        <div className="banner-right-section curtain__panel curtain__panel--right">
                                            <h2>{rightTitle}</h2>
                                        </div>
                                    </div>
                                    <a href="#scroll-down" className="scroll-arrow"><i className="fa-solid fa-angles-down fa-bounce"></i></a>
                                </div>
                            </div>
                        </React.Fragment>

                    )
                })
            }
           
           
        </>
    )
}

export default Banner;
