import React from "react";

const Location = ({location}) => {
  return (
    <>
      <section>{location?.name}</section>
      <section>
        <span>Type: {location?.type}</span>
        <span>Dimension: {location?.dimension}:</span>
        <span>population: {location?.residents.length}</span>
      </section>
    </>
  );
};

export default Location;
