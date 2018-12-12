import React from 'react'
import {Link} from 'react-router-dom'

class Department extends React.Component {
 
  render() {
    const {name, description, id} = this.props
    return(
      <div>
        <Link to={`api/departments/${id}`} >
          {name}
        </Link>
        <p>{description}</p>  
      </div>
    )
  }
}

export default Department