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
      <section className="banner_new">
        <div className="Banner_content">
          {entry.map((item, i) => {
            const { title, description } = item.fields;
            const id = item.sys.id
            return (
              <React.Fragment key={id}>
                <h2>{title}</h2>
                <p>{description}</p>
                <button className="btn">Get Details</button>
              </React.Fragment>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default BannerNew;
