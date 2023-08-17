import React from "react";
import ResidentInfo from "./ResidentInfo";

const Location = ({location}) => {
  return (
    <>
    <div className="text-white">
    <section className="flex justify-center items-center mb-4 text-2xl text-cyan-500">{location?.name}</section>
      <section className="flex justify-center items-center gap-3 flex-col mb-4">
        <span className="bg-black p-3 rounded-2xl border-4 border-s-green-200 border-green-400">Type: {location?.type}</span>
        <span className="bg-black p-3 rounded-2xl border-4 border-s-green-200 border-green-400 flex flex-col"><p className="flex justify-center text-yellow-400">Dimension</p><p>{location?.dimension}</p></span>
        <span className="bg-black p-3 rounded-2xl border-4 border-s-green-200 border-green-400">population: {location?.residents.length}</span>
      </section>

      <section className="flex gap-4 flex-wrap justify-center items-center m-4">
      {
          location?.residents.map(resident=> (<ResidentInfo key={resident} residentLocation={resident}/>) )
        }
      </section>

    </div>
     
    </>
  );
};

export default Location;
