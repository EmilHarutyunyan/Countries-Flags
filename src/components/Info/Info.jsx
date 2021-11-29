import React, {useState, useEffect} from 'react';
import axios from 'axios'
// Styles
import {Wrapper, InfoImage, InfoTitle, ListGroup, List, ListItem, Meta, TagGroup, Tag} from "./Info.styles"
// Config
import { filterByCode } from '../../config';

export const Info = (props) => {
    
    const {
        name,
        nativeName,
        flag,
        capital,
        population,
        region,
        subregion,
        topLevelDomain = [],
        currencies = [],
        languages = [],
        borders = [],
        goCountry,

     } = props;
     console.log(nativeName, 'nativeName');

     console.log(borders, 'borders');
     const [neighbors, setNeighbors] = useState([])

    useEffect(() => {
        if(borders.length)
            axios.get(filterByCode(borders)).then(({data}) => setNeighbors(data.map((c) => c.name)));
    },[borders])
    return (
        <Wrapper>
            <InfoImage src={flag} alt={name}/>
            <div>
                <InfoTitle>{name}</InfoTitle>
                <ListGroup>
                    <List>
                        <ListItem>
                        <b>Native Name:</b> {nativeName}
                        </ListItem>
                        <ListItem>
                        <b>Population</b> {population}
                        </ListItem>
                        <ListItem>
                        <b>Region:</b> {region}
                        </ListItem>
                        <ListItem>
                        <b>Sub Region:</b> {subregion}
                        </ListItem>
                        <ListItem>
                        <b>Capital:</b> {capital}
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                        <b>Top Level Domain</b>{' '}
                        {topLevelDomain.map((d) => (
                            <span key={d}>{d}</span>
                        ))}
                        </ListItem>
                        <ListItem>
                        <b>Currency</b>{' '}
                        {currencies.map((c) => (
                            <span key={c.code}>{c.name} </span>
                        ))}
                        </ListItem>
                        <ListItem>
                        <b>Top Level Domain</b>{' '}
                        {languages.map((l) => (
                            <span key={l.name}>{l.name}</span>
                        ))}
                        </ListItem>
                    </List>
                </ListGroup>
                <Meta>
                    <b>Border Countries </b>
                    {!neighbors.length ? (
                        <span>There is no border countries</span>
                    ): (
                        <TagGroup>
                            {borders.map((b) => (<Tag onClick={()=> goCountry(b)} key={b}>{b}</Tag>))}
                        </TagGroup>
                    )}
                </Meta>
            </div>
        </Wrapper>
    )
}
