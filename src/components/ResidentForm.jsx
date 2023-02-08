import React from 'react'
import './styles/ResidentForm.css'

const ResidentForm = ({ handleSubmit }) => {
  return (
    <div className='residentForm'>
      <form className='residentForm__form' onSubmit={handleSubmit}>
        <input className='residentForm__input' type="text" id="idLocation" placeholder="Type a location id" />
        <button className='residentForm__btn'>Search</button>
      </form>
    </div>
  )
}

export default ResidentForm