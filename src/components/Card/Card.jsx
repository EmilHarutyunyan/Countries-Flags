import React from 'react'
// Styles
import {Wrapper,CardImage,CardBody,CardTitle,CardList,CardListItem} from "./Card.styles"

export const Card = ({img, name, info = [], onClick}) => {
    return (
        <Wrapper onClick={onClick}>
            <CardImage src={img} alt={name}/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardList>
                    {info.map(el => (
                        <CardListItem key={el.title}>
                            <b>{el.title}:</b> {el.description}
                        </CardListItem>
                    ))}
                </CardList>
            </CardBody>
        </Wrapper>
    )
}
