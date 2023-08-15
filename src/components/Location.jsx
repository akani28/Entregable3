import React from "react";
import ResidentInfo from "./ResidentInfo";

const Location = ({location}) => {
  return (
    <>
    <div className="bg-black text-white">
    <section className="flex justify-center">{location?.name}</section>
      <section className="flex justify-center gap-3">
        <span>Type:{location?.type}</span>
        <span>Dimension:{location?.dimension}</span>
        <span>population:{location?.residents.length}</span>
      </section>

      <section className="flex gap-4 flex-wrap">
      {
          location?.residents.map(resident=> (<ResidentInfo key={resident} residentLocation={resident}/>) )
        }
      </section>

    </div>
     
    </>
  );
};

export default Location;
