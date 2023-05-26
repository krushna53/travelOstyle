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
       
        <div className="banner_com same_width">
          <div className="d_flex">
            {entry.map((item, i) => {
              const { title, description, leftTitle, rightTitle, linkField } =
                item.fields;
              const imageUrl = item?.fields?.image?.fields?.file?.url
                ? item?.fields?.image?.fields?.file?.url
                : "";
              const id = item.sys.id;
              return (
                <React.Fragment key={id}>
                  <div className="banner_left_con">
                    <p className="red">{title}</p>
                    <h1 className="title">
                      {leftTitle} <span>O</span> {rightTitle}
                    </h1>
                    <div className="dec">{description}</div>
                    <div className="banner_btn">
                      <button>{linkField}</button>
                    </div>
                  </div>
                  <div className="sc-ieecCq fIygvt">
                    <img src={imageUrl} alt="img" />
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
