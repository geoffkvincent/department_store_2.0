import React from 'react'
import {Link} from 'react-router-dom'

const Department = ({ name, description, id }) => (
  <div>
    <Link to={`/departments/${id}`} >
      {name}
    </Link>
    <p>{description}</p>  
  </div>
)

export default Department