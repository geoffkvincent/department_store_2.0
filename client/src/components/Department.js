import React from 'react'
import {Link} from 'react-router-dom'

const Department = ({ name, description, id, handleDelete }) => (
  <div>
    <Link to={`/departments/${id}`} >
      <h1>{name}</h1>
    </Link>
    <p>{description}</p> 
    <Link to={`/departments/${id}`}>
      <button>Edit</button>
    </Link> 
    <button >
      Delete
    </button>
  
  </div>
)

export default Department