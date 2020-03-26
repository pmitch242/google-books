import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '.'

function App() {
  return (
    <Switch>
      <Router>
        <div>
          <Route exact path={['/', '/search']}>

          </Route>
          <Route exact path={['/library']}>

          </Route>
          <Route >

          </Route>
        </div>
      </Router>
    </Switch>
  )
}

export default App;
