import React from 'react'
import { Row } from "./Row";

export const Table = props => {
    return (
        <div>
            <Row />
            {props.data.map( x => {
                return <Row
                    fall={x.fall}
                    geolocation={x.geolocation}
                    id={x.id}
                    key={x.id}
                    mass={x.mass}
                    name={x.name}
                    nameType={x.nametype}
                    reclat={x.reclat}
                    year={x.year}
                />
            })}
        </div>
    )
};
