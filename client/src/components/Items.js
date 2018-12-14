import React from 'react'
import axios from 'axios'

class Items extends React.Component {
  state = {items: [], Dep: {} }

  componentDidMount() {
    const {id} = this.props.match.params
    axios.get(`/api/departments/${id}/items`)
      .then( res => this.setState({ items: res.data }))
    axios.get(`/api/departments/${id}`)
      .then( res => this.setState({}))
  }

  render() {
    return(
      <div>
        <ul>
          {this.state.items.map(item => (
            <li key={item.id}>
            <h1>{item.name}</h1>
            <p>{`Description: ${item.description}`}</p>
            <p>{`qty: ${item.qty}`}</p>
            <p>{`price: ${item.price}`}</p>
            <button>Edit</button>
            <button>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
}

export default Items