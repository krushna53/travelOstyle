import React, { useState, useEffect } from "react";
import client from "../Client";

const BannerNew = () => {
  const [entry, setEntry] = useState([]);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await client.getEntries({
          content_type: "banner",
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
      <section className="banner_new ">
        <div className="same_width">
        <div className="Banner_content">
          {entry.map((item, i) => {
            const { title, description } = item.fields;
            const imageUrl = (item?.fields?.image?.fields?.file?.url) ? item?.fields?.image?.fields?.file?.url : '';
            const id = item.sys.id
            return (
              <React.Fragment key={id}>
                <div className="left">
                <h2>{title}</h2>
                <p>{description}</p>
                <button className="btn">Get Details</button>
                </div>
                <div className="right">
                  <img src={imageUrl} alt="imageNew" />
                </div>
              </React.Fragment>
            );
          })}
        </div>
        </div>
       
      </section>
    </>
  );
};

export default BannerNew;
