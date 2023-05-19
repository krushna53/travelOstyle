import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TourRightSidebar = () => {
  return (
    <>
      <div className="Right_tour">
        <div className="price_right">
          <i className="fa-solid fa-tag"></i>
          <span>From:</span>
          <h2>$1,900</h2>
        </div>
        <form action="">
          <label htmlFor="">Pick Up Date</label>
          <input type="date" />
          <label htmlFor="">Person(s)</label>
          <input type="number" min="1" />
          <input type="submit" value="Book This Tour" />
        </form>
        <div className="support">
          <div className="">
            <h3>Custumer Support</h3>
            <p>9987547773</p>
            <p>Talktous@example.com</p>
            <p>09:00am ~ 06:00pm (Mon to Fri)</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourRightSidebar;
