import React, {Fragment} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Card, Button, Header} from 'semantic-ui-react'

class Items extends React.Component {
  state = {items: [], dep: {} }

  componentDidMount() {
    const {id} = this.props.match.params
    axios.get(`/api/departments/${id}/items`)
      .then( res => this.setState({ items: res.data }))
    axios.get(`/api/departments/${id}`)
      .then( res => this.setState({dep: res.data }))
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
    return (    
      <>
        {this.state.items.map(item => (
          <Fragment key={item.id}>
            <Card>
              <Card.Content>
                <Card.Header>{item.name}</Card.Header>
                <Card.Meta>{`qty: ${item.qty}`}</Card.Meta>
                <Card.Description>{`Description: ${item.description}`}</Card.Description>
                <p>{`price: $${item.price}`}</p>
              </Card.Content>
              <Card.Content extra>
                <Button>Edit</Button>
                <Button color="red" onClick={() => this.deleteItem(item.id)}>Delete</Button>
              </Card.Content>
            </Card>
          </Fragment>
        ))}
      </>
    )
  }

  render() {
    const { name, id } = this.state.dep
    return(
      <>
        <Header>{this.props.location.state.name}</Header>
        <Link to={`/departments/${id}/items/new`}>
          <Button onClick={this.addItem}>Add Item</Button>
        </Link>
        <Card.Group itemsPerRow={3}>
          {this.renderItems()}
        </Card.Group>
      </>
    )
  }
  
}

export default Items