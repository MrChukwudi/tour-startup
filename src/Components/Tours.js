import React from "react";
import TourCard from "./TourCard";
import { tourCard } from "../data";

import Title from "./Title";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="Featured" subtitle="Tours" />

      <div className="section-center featured-center">
        {tourCard.map((card) => {
          const {
            date,
            source,
            info,
            description,
            iName,
            price,
            days,
            place,
            id,
          } = card;
          return (
            <TourCard
              key={id}
              date={date}
              source={source}
              info={info}
              description={description}
              iName={iName}
              price={price}
              days={days}
              place={place}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
