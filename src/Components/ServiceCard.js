import React from "react";

const ServiceCard = (props) => {
  const { iName, caption, description } = props;
  return (
    <article className="service">
      <span className="service-icon">
        <i className={iName}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{caption}</h4>
        <p className="service-text">{description}</p>
      </div>
    </article>
  );
};

export default ServiceCard;
