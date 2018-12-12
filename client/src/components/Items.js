import React from 'react'
import axios from 'axios'

class Items extends React.Component {
  state = {items: [] }

  componentDidMount() {
    debugger
    const {id} = this.props.match.params
    axios.get(`/api/departments/${id}/items`)
      .then( res => this.setState({ items: res.data }))
  }

  render() {
    return(
      <h1>null</h1>
    )
  }
  
}

export default Items