import React from 'react'
import axios from 'axios'
import Department from './Department'


class Store extends React.Component {
  state = { departments: [] }

  componentDidMount() {
    axios.get('api/departments')
      .then(res => this.setState({ departments: res.data }))
  }

  render() {
    return (
      <div>
        {this.state.departments.map(d => (
           <Department key={d.id} name={d.name} description={d.description} id={d.id} />  
          )
        )}
      </div>
    )
  }
}

export default Store