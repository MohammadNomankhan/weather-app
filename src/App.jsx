import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Loader, Image, Segment } from "semantic-ui-react";
// temp
import WeatherDisplay from "./components/WeatherDisplay";
import LoaderMain from "./components/Loader";

const App = () => {
  const [state, setState] = useState({
    lat: [],
    lon: [],
    data: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );

      const data = await res.json();
      setState((prevState) => ({ ...prevState, data }));
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {typeof state.data.main != "undefined" ? (
        <WeatherDisplay weatherData={state.data} />
      ) : (
        <LoaderMain></LoaderMain>
      )}
    </div>
  );
};

export default App;
