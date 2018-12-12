import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Store from './components/Store'
import Items from './components/Items'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Store}/>
      <Route exact path="/departments/:id/items" component={Items} />
    </Switch>
  </>
)

export default App