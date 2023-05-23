import React, { useState, useEffect } from "react";
import client from "../Client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const About = () => {
  const [entry, setEntry] = useState([]);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await client.getEntries({
          content_type: "basicPage",
          "sys.id": "77m64RFwCqZ6SzEDeM44n0",
        });
        console.log();
        console.log(response);
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
      {entry.map((item) => {
        const { title, description, positionOfImage, subTitle } = item.fields;
        //  const imageUrl = item.fields.image.fields.file.url;
        const images = item.fields.image;

        const richTextContent = documentToReactComponents(description);
        const id = item.sys.id;
        return (
          <React.Fragment key={id}>
            <section className="about_us same_width">
              <div className="about_us_wrapper">
                <div className="about_us_left">
                  <div className="about_us_title">
                    <h2>{title}</h2>
                    <span>{subTitle}</span>
                  </div>
                  <div className="about_us_content">{richTextContent}</div>
                </div>
                <div className="about_us_right">
                  {
                    <div className="about_us_image">
                      {images.map((image, index) => (
                        <img
                          key={index}
                          src={image.fields.file.url}
                          alt={`${index}`}
                        />
                      ))}
                    </div>
                  }
                </div>
              </div>
            </section>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default About;
