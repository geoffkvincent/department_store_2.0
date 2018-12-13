import React from 'react'
import axios from 'axios'
import Department from './Department'
import { Link } from 'react-router-dom'


class Store extends React.Component {
  state = { departments: [] }

  componentDidMount() {
    axios.get('api/departments')
      .then(res => this.setState({ departments: res.data }))
  }

  handleDelete = (id) => {
    
  }

  render() {
    return (
      <div>
        <h1>Department Store 2.0</h1>
        <Link to="/departments/new">
          <button>Create Department</button>
        </Link>
        { this.state.departments.map(d => (
            <Department 
              key={d.id} 
              name={d.name} 
              description={d.description} 
              id={d.id}
              handleDelete={this.handleDelete} 
            />  
          )
        )}
      </div>
    )
  }
}

export default Store