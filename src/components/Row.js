import React from 'react'

export const Row = ({ name = 'Name', id = 'ID', nameType = 'Name Type', reclat = 'Reclat', mass = 'Mass', fall = 'Fall', year = 'Year', geolocation = 'GeoLocation'}) => {


    return (
        <div className="data-row__flex-wrap">
            <div className="data-row__item data-row__mobile">{name}</div>
            <div className="data-row__item">{id}</div>
            <div className="data-row__item">{nameType}</div>
            <div className="data-row__item">{reclat}</div>
            <div className="data-row__item data-row__mobile">{mass}</div>
            <div className="data-row__item">{fall}</div>
            <div className="data-row__item data-row__mobile">{year.split('-')[0]}</div>
            <div className="data-row__item">{geolocation.latitude || 'Latitude'}</div>
            <div className="data-row__item">{geolocation.longitude || 'Longitude'}</div>
        </div>
    )
};
