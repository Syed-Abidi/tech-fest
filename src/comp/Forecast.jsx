import { useEffect, useState } from "react";
import Update from "./Update";

const Forecast = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Japan");

  useEffect(() => {
    const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ec6f1b48d65dbc09e2724ea665b1a97e`;
    const fetchApi = async () => {
      const response = await fetch(url1);
      const responseJson = await response.json();
      console.log(responseJson);
      setCity(responseJson.main);
    };
    fetchApi();
  }, [search]);

  const cities = [
    {
      id: 1,
      title: "India",
    },
    {
      id: 2,
      title: "Russia",
    },
    {
      id: 3,
      title: "China",
    },
    {
      id: 4,
      title: "Germany",
    },
  ];

  return (
    <div>
      <div className=" mx-auto  ">
        <div className="flex">
          {cities.map((city) => {
            return (
              <button
                key={city.id}
                className="flex w-full justify-around mb-2 mt-3 px-2.5 font-medium"
                onClick={() => {
                  setSearch(city.title);
                }}
              >
                {city.title}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex my-2 justify-around items-center">
        <span className="flex items-center font-light">Search :</span>
        <input
          type="search"
          name="searchBar"
          // value={search}
          className="shadow-l shadow-gray-400 text-black p-1 mx-1.5 focus:outline-none capitalize"
          id="val"
          placeholder="City Name"
          onChange={(event) => {
            setSearch(event.target.value);
            console.log(setSearch);
          }}
        />

        <button>
          <i className="fa-solid fa-magnifying-glass transition-all ease-out px-2 font-light hover:scale-125"></i>
        </button>
        <button>
          <i className="fa-solid fa-location-dot fa-l transition-all ease-out px-2 font-light hover:scale-125"></i>
        </button>
        <div className="flex justify-around items-center">
          <button className="transition-all ease-out px-2 font-light hover:scale-125">
            °C
          </button>
        </div>
      </div>
      {
        !city ? (<p>no data found</p>):(<>
        
      <div>
        <div className="font-light flex justify-center py-2">
          Wed, 22 June 2022
        </div>
        <div className="font-semibold flex justify-center py-2 text-2xl capitalize">
          {search}
        </div>
        <div className=" text-violet-500 font-light text-xl flex justify-center mb-2">
          {/* {city.weather[1].main} */}
        </div>

        <div className="flex justify-around items-center mb-3Name">
          <i className="fa-solid fa-sun fa-6x "></i>
          <p className="text-4xl font-medium">
            {city.temp}
            °C
          </p>
          <div className="flex flex-col ">
            <div>
              <i className="fa-solid fa-temperature-half mr-2"></i>Real fell:
              <span className="font-medium ml-1">
                {city.feels_like}
                °C
              </span>
            </div>
            <div>
              <i className="fa-solid fa-droplet mr-2 "></i>Humidity:
              <span className="font-medium ml-1">{city.humidity}%</span>
            </div>
            <div>
              <i className="fa-solid fa-wind mr-2 "></i>Wind:
              <span className="font-medium ml-1">
                {/* {city.wind.speed} */}
                Km/h
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center mt-4">
          <div className="flex justify-around items-center">
            <i className="fa-solid fa-sun mx-2"></i>Rise:{""}
            <p className="font-medium ml-1">4:30 AM</p>
          </div>
          <div className="flex justify-around items-center">
            <span>|</span>
            <i className="fa-solid fa-moon mx-2"></i>Set:{" "}
            <p className="font-medium ml-1">6:30 PM</p>
          </div>
          <div className="flex justify-around items-center">
            <span>|</span>
            <i className="fa-solid fa-arrow-up mx-2"></i>
            <p className="font-medium ml-1">
              {city.temp_max}
              °C
            </p>
          </div>
          <div className="flex justify-around items-center">
            <span>|</span>
            <i className="fa-solid fa-arrow-down mx-2"></i>
            <p className="font-medium ml-1">{city.temp_min}° C</p>
          </div>
        </div>
      </div>

      <div className="flex item-center justify-start mt-4">
        <p className="font-medium uppercase">Daily Forecast</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-around">
        <div className="flex flex-col items-center justify-center my-2">
          <p className="font-light underline">Latitude</p>
          {/* {city.coord.lat} */}
        </div>
        <div className="flex flex-col items-center justify-center my-2">
          <p className="font-light underline">Longitude</p>
          {/* {city.coord.lon} */}
        </div>
        <div className="flex flex-col items-center justify-center my-2">
          <p className="font-light underline">Description</p>
          <p className="font-medium">{/* { city.weather[2].description} */}</p>
        </div>
      </div>
      <Update search={search} />
      </>
      )
    }
    </div>
  );
};
export default Forecast;
