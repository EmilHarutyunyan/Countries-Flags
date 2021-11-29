import React, {useState, useEffect} from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import axios from "axios";
import {IoArrowBack} from "react-icons/io5"
// Config
import { searchByCountry } from '../config';
// Components
import { Button } from '../components/Button/Button';
import { Info } from '../components/Info/Info';

export const CountryPage = () => {
    const {name} = useParams();

    const [country, setCountry] = useState(null);

    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    // const goCountry = (name) => navigate(`/country/${name}`)

    console.log(country)

    useEffect(() => {
        axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
      }, [name]);
    return (
        <div>
            <Button type="button" onClick={goBack}>
               <IoArrowBack /> Back
            </Button>
            {country && <Info goCountry={(name) => navigate(`/country/${name}`)} {...country}/>}
        </div>
    )
}
