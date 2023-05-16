import React, { useEffect, useState} from "react";
import Slider from "react-slick";
import { ImLocation2 } from "react-icons/im";

import { Link } from "react-router-dom";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import client from "../Client";

const TourCard = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    initialSlide: 0,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [entry, setEntry] = useState([]);

  const [selectedFilter, setSelectedFilter] = useState("All");
  const filteredData = entry.filter((item) => {
    if (selectedFilter === 'All') {
      return true;
    } else {
      return item.fields.countryRegion === selectedFilter;
    }
  });
  const countryRegions = [...new Set(entry.map((item) => item.fields.countryRegion))];
  countryRegions.sort(); // sort alphabetically
  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await client.getEntries({
          content_type: "package",
        });
        console.log(response);
        if (response.items.length) {
          setEntry(response.items);
          console.log(response.items);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPage();
  }, []);

  return (
    <div className="Tour-section" id="scroll-down">
      <h2>Packages</h2>
      <div className="tour-filter">
        <div className="tour-filter">
          <button onClick={() => setSelectedFilter('All')} className={selectedFilter === 'All' ? 'active' : ''}>All</button>

          {countryRegions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedFilter(region)}
              className={selectedFilter === region ? "active" : ""}
            >
              {region}
            </button>
          ))}
        </div>
      </div>
      <div className="container">
        <Slider
          {...settings}
        >
          {filteredData.map((item) => {
            const { slug, packageTitle, packageStartingPrice, exclusions,description } = item.fields;
            const richTextContent = documentToReactComponents(description)
            const imageUrl = (item?.fields?.packageBanner?.fields?.file?.url) ? item?.fields?.packageBanner?.fields?.file?.url : '';
            const id = item.fields.sys;
            return (
              <div className="card-wrapper" key={id}>
                <Link to={`/tour-details/${slug}`} className="card-btn">
                  <img src={imageUrl} alt="image1" className="img-div" />
                </Link>
                <div className="card-details">
                  <div className="travel-info">
                    <div className="travel-place">
                      <span>{packageTitle}</span>
                      <p>
                        <ImLocation2 /> Europe
                      </p>
                    </div>
                    <div className="price">
                      <span className="card-price">${packageStartingPrice}</span>
                    </div>
                  </div>
                  <p className="card-des">
                    {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quod harum magni tenetur */}
                    {richTextContent}
                  </p>
                  <Link to={`/tour-details/${slug}`} className="card-btn">
                    Details
                  </Link>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default TourCard;





