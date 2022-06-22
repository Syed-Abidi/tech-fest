// https://covid-api.mmediagroup.fr/v1 /cases?country=France
// https://github.com/M-Media-Group/Covid-19-API


import React, { useEffect, useState } from "react";

const Update = (props) => {
  const [city, setCity] = useState(null);
  useEffect(() => {
    const url = `https://covid-api.mmediagroup.fr/v1/cases?country=${props.search}`;
    const fetchApi = async () => {
      const response = await fetch(url);
      const responseJson = await response.json();
      console.log(responseJson);
      setCity(responseJson.All);
    };
    fetchApi();
  }, [props.search]);

  return (
    <div>
      {!city ? (
        <p>
          No Dataa
        </p>
      ) : (
        <div>
          <p className="font-medium uppercase">Covid Cases</p>
          <hr className="py-1" />
          <div className=" flex justify-between items-center my-2">
            <div>
              <div className="underline">Confirmed: </div>
              <p className="font-light">{city.confirmed}</p>
            </div>
            <div >
              <p className="underline">Deaths:</p>
              <p className="font-light">{city.deaths} </p>
            </div>
            <div >
              <p className="underline">Life Expectancy:</p> 
              <p className="font-light">{city.life_expectancy} </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Update;
