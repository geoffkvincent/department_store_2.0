import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Items from './Items'

class Department extends React.Component {
  state = {items: [] }

  componentDidMount() {
    const {id} = this.props
    axios.get(`api/departments/${id}/items`)
      .then( res => this.setState({ items: res.data }))
  }

  render() {
    const {name, description, id} = this.props
    return(
      <div>
        <Link to={`api/departments/${id}`} >
          {name}
        </Link>
        <p>{description}</p>  
        <Items />
      </div>
    )
  }
}

export default Department