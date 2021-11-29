import React from 'react'
import { useParams } from 'react-router'
export const CountryPage = () => {
    const {name} = useParams()
    console.log(name)
    return (
        <div>
            Details {name}
        </div>
    )
}
