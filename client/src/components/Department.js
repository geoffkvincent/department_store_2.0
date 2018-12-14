import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'semantic-ui-react'

const Department = ({ name, description, id, handleDelete }) => {
  return (
    <Card>
      <Card.Content>
        <Link to={`/departments/${id}`} >
          <Card.Header>{name}</Card.Header>
        </Link>
        <Card.Description>{description}</Card.Description> 
      </Card.Content>
      <Card.Content>
        <Link to={`/departments/${id}`}>
          <Button>Edit</Button>
        </Link>
        <Button onClick={() => handleDelete(id)}>Delete</Button>
      </Card.Content>
    </Card>
  )
}

export default Department