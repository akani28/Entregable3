import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { randomNumber } from "./random";
import Location from "./components/Location";
import ResidentInfo from "./components/ResidentInfo";

function App() {
  const [location, setLocation] = useState(null);
  useEffect(() => {
    const randomLocation = randomNumber(126);
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomLocation}`)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="bg-black p-4">
      <form className="flex justify-center items-center">
        <input className="border-green-400 border-2" type="text" />
        <button className="bg-[#8eff8b80] border-green-400 border-2 w-[50px] h-[28px]">
          <svg className="flex items-center"
            width="25"
            height="24"
            viewBox="-10 0 30 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="pixelarticons:search">
              <path
                id="Vector"
                d="M6.25001 2H14.5833V4H6.25001V2ZM4.16668 6V4H6.25001V6H4.16668ZM4.16668 14H2.08334V6H4.16668V14ZM6.25001 16H4.16668V14H6.25001V16ZM14.5833 16V18H6.25001V16H14.5833ZM16.6667 14H14.5833V16H16.6667V18H18.75V20H20.8333V22H22.9167V20H20.8333V18H18.75V16H16.6667V14ZM16.6667 6H18.75V14H16.6667V6ZM16.6667 6V4H14.5833V6H16.6667Z"
                fill="#FBFBFB"
              />
            </g>
          </svg>
        </button>
      </form>
      <Location location={location} />
      
     
    </main>
  );
}

export default App;
