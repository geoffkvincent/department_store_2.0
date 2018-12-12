import React from 'react'
import {Link} from 'react-router-dom'

const Department = ({ name, description, id }) => (
  <div>
    <Link to={`/departments/${id}`} >
      <h1>{name}</h1>
    </Link>
    <p>{description}</p> 
    <Link to={`/departments/${id}`}>
      <button>Edit</button>
    </Link> 
    <Link to={`/departments/${id}`}>
      <button>Delete</button>
    </Link> 
  </div>
)

export default Department