import React from 'react'
import axios from 'axios'

class Items extends React.Component {
  state = {items: [] }

  componentDidMount() {
    const {id} = this.props.match.params
    axios.get(`/api/departments/${id}/items`)
      .then( res => this.setState({ items: res.data }))
  }

  render() {
    return(
      <div>
        <ul>
          {this.state.items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    )
  }
  
}

export default Items