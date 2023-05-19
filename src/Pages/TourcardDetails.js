import React, { useEffect, useState } from "react";
import "../css/pages.css";
import { useParams } from "react-router-dom";
import client from "../Client";
import TourCardDetailsNew from "../Components/TourCardDetailsNew";
const TourcardDetails = () => {
  const { slug } = useParams();
  const [entry, setEntry] = useState(null);
  function handleButtonClick() {
    window.location.href = "mailto:norepay@gmail.com";
  }

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

  return (
    <div className="" tabIndex={0}>
      <div>
        {entry &&
          entry.map((info) => {
            const { packageTitle } =
              info.fields;
              const key = info.sys.id; // Replace info.fields.sys with the correct identifier
           
            return (
              <React.Fragment key={key} >
                {
                  entry.map((d, i) => (
                    <div key={i} style={{ background: `url(${d.fields.fullBanner?.fields?.file?.url}) no-repeat` }} className="tour-details-container">
                    </div>
                  ))
                }
                <div className="banner_title">
                  <h1>{packageTitle}</h1>
                  <button className="tour-book-btn" onClick={handleButtonClick}>Book Now</button>
                </div>
                <div className="details_main">
                  <TourCardDetailsNew />
                </div>
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
};
export default TourcardDetails;