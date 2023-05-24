import React, { useState, useEffect } from "react";
import client from "../Client";
import Image from '../images/image (2).png'
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
        {/* <div className="same_width">
          <div className="Banner_content">
            {entry.map((item, i) => {
              const { title, description } = item.fields;
              const imageUrl = item?.fields?.image?.fields?.file?.url
                ? item?.fields?.image?.fields?.file?.url
                : "";
              const id = item.sys.id;
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
        </div> */}

        {/*  */}
        <div className="banner_com">
        <div class="sc-bkkeKt gGCbNn">
          <div class="banner_left_con">
            <p class="red">Best Destination Around The World</p>
            <h1 class="title">
              Travel, <span>enjoy</span> and live a new and full life
            </h1>
            <p class="dec">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
            <div class="sc-fKVqWL eAXuhA">
              <button>Find out more</button>
            </div>
          </div>
          <div class="sc-ieecCq fIygvt">
            <img src={Image} alt="img" />
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default BannerNew;
