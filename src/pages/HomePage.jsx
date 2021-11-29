import React, { useState, useEffect,  } from "react";
import { useNavigate } from "react-router";
import axios from "axios";


// Components
import { Controls } from "../components/Controls/Controls";
import { List } from "../components/List/List";
import { Card } from "../components/Card/Card";

// Config
import { ALL_COUNTRIES } from "../config";

export const HomePage = ({countries, setCountries}) => {
  const [filtredCountries, setFiltredCountries] = useState(countries);

  const navigate = useNavigate();

 
  const handleSearch = (search, region) => {
    let data = [...countries]
    if(region) {
      // data mech pahvuma orinak region=Asia bolor erkrnere
        data = data.filter(country => country.region.includes(region))
    }
    if(search) {
      // data mech pahvuma orinak region=Asia bolor erkrnere
        data = data.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))
    }
    setFiltredCountries(data)
  }

  useEffect(() => {
    if(!countries.length) axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    // console.log(countries);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    handleSearch()
    // eslint-disable-next-line
  },[countries])

  
  return (
    <>
      <Controls onSearch={handleSearch}/>
      <List>
        {filtredCountries.map(country => {
          const countryInfo = {
            img: country.flags.png,
            name: country.name,
            info: [
              {
                title: "Population",
                description: country.population.toLocaleString(),
              },
              {
                title: "Region",
                description: country.region,
              },
              {
                title: "Capital",
                description: country.capital,
              },
            ],
          };
          return <Card key={country.name} onClick={() => navigate(`/country/${country?.name}`)} {...countryInfo} />;
        })}
      </List>
    </>
  );
};
