import React from 'react'
import {Link} from 'react-router-dom'

const Department = ({ name, description, id }) => (
  <div>
    <Link to={`/departments/${id}`} >
      <h1>{name}</h1>
    </Link>
    <p>{description}</p>  
  </div>
)

export default Department