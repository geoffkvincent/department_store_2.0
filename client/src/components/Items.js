import React from 'react'
import axios from 'axios'

class Items extends React.Component {
  state = {items: [], dep: {} }

  componentDidMount() {
    const {id} = this.props.match.params
    axios.get(`/api/departments/${id}/items`)
      .then( res => this.setState({ items: res.data }))
    axios.get(`/api/departments/${id}`)
      .then( res => this.setState({dep: res.data }))
  }

  deleteItem = (id, itemId) => {
    axios.delete(`api/departments/${id}/items/${itemId}`)
  }

  render() {
    return(
      <div>
        <h1>{this.state.dep.name}</h1>
        <ul>
          {this.state.items.map(item => (
            <li key={item.id}>
            <h1>{item.name}</h1>
            <p>{`Description: ${item.description}`}</p>
            <p>{`qty: ${item.qty}`}</p>
            <p>{`price: ${item.price}`}</p>
            <button>Edit</button>
            <button onClick={() => this.deleteItem(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
}

export default Items