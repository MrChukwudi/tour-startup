import React from "react";

const TourCard = (props) => {
  const { date, source, info, description, iName, price, days, place } = props;
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={source} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <h4>{info}</h4>
        <p>{description}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className={iName}></i>
            </span>
            {place}
          </p>
          <p>{days}</p>
          <p>{price}</p>
        </div>
      </div>
    </article>
  );
};

export default TourCard;
