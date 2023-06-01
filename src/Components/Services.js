import React from "react";
import Title from "./Title.js";
import { serviceCard } from "../data.js";
import ServiceCard from "./ServiceCard.js";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />

      <div className="section-center services-center">
        {serviceCard.map((card) => {
          const { id, iName, caption, description } = card;
          return (
            <ServiceCard
              key={id}
              iName={iName}
              caption={caption}
              description={description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Services;
