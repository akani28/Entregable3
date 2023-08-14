import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { randomNumber } from "./random";
import Location from "./components/Location";

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
    <main>
      <form className="bg-red-400">
        <input type="text" />
        <button>Search</button>
      </form>
      <Location location={location} />
    </main>
  );
}

export default App;
