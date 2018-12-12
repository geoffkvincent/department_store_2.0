import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Department extends React.Component {
  state = {items: [] }

  componentDidMount() {

  }

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