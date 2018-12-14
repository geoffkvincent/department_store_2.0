import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Store from './components/Store'
import Items from './components/Items'
import DepForm from './components/DepForm'
import { Container } from 'semantic-ui-react'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import ItemForm from './components/ItemForm'

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Container as={AppStyle}>
          <Switch>
            <Route exact path="/" component={Store}/>
            <Route exact path="/departments/new" component={DepForm} />
            <Route exact path="/departments/:id" component={Items} />
            <Route exact path="/departments/:id/items/new" component={ItemForm} />
          </Switch>
        </Container>
      </>
    )
  }
}

const AppStyle = styled.div`
  padding: 45px;
`



export default App