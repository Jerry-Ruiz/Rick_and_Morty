import React from 'react'
import "./styles/LocationInfo.css"

const LocationInfo = ({ location }) => {
  return (
    <section className='locationInfo'>
      <h2 className='locationInfo__name'>{location?.name}</h2>
      <ul className='locationInfo__list'>
        <li className='locationInfo__item'><span>Type: </span>{location?.type}</li>
        <li className='locationInfo__item'><span>Dimension: </span>{location?.dimension}</li>
        <li className='locationInfo__item'><span>Population: </span>{location?.residents.length}</li>
      </ul>
    </section>
  )
}

export default LocationInfo