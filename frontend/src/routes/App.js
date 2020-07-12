import React from 'react'
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Destroy from '../components/Destroy'
import Launcher from '../components/Launcher'
import Settings from '../components/Settings'

const NotFound = () => (
    <div>Not found</div>
)

const App = () => (
  
    <BrowserRouter>
      <Layout>
        <Switch>
        <Route exact path="/" component={Launcher}/>
          <Route exact path="/launcher" component={Launcher}/>
          <Route exact path="/destroy" component={Destroy}/>    
          <Route exact path="/settings" component={Settings}/>    
          <Route component={ NotFound }/>
        </Switch>
      </Layout>


      
  </BrowserRouter>
)

export default App