import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Items extends React.Component {
  state = {items: [], dep: {} }

  componentDidMount() {
    const {id} = this.props.match.params
    axios.get(`/api/departments/${id}/items`)
      .then( res => this.setState({ items: res.data }))
    axios.get(`/api/departments/${id}`)
      .then( res => this.setState({dep: res.data }))
  }

  addItem = () => {

  }

  deleteItem = (itemId) => {
    const {id} = this.props.match.params
    axios.delete(`/api/departments/${id}/items/${itemId}`)
      .then( res => {
        const items = this.state.items.filter( item => {
          if(item.id !== itemId)
            return item
              return null
        })
        this.setState({ items })
      })
  }

  renderItems = () => {
    const { name, id } = this.state.dep
    return (
      <div>
        <h1>{name}</h1>
        <Link to={`/departments/${id}/items/new`}>
        <button onClick={this.addItem}>Add Item</button>
        </Link>
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

  render() {
    return(
      <>
        {this.renderItems()}
      </>
    )
  }
  
}

export default Items