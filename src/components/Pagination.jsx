import React from 'react'
import { numbersPage } from '../utils/handlePagination'
import "./styles/Pagination.css"

const Pagination = ({ setPage, RESIDENTS_PERPAGE, location }) => {

  return (
    <div>
      <ul className={`pagination ${RESIDENTS_PERPAGE}`}>
        {
          numbersPage(location, RESIDENTS_PERPAGE).map(numberPage => <li className='pagination__position' onClick={() => setPage(numberPage)} key={numberPage}>{numberPage}</li>)
        }
      </ul>
    </div>
  )
}

export default Pagination 