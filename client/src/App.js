import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbo from './components/Jumbo'
import Search from './pages/Search';
import Library from './pages/Library';

function App() {
  return (
    <Router>
      <div>
        <Jumbo />
        <Switch>
          <Route exact path={['/', '/search']}>
            <Search />
          </Route>
          <Route exact path={['/library']}>
            <Library />
          </Route>
          <Route >
            <h1>No page found</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
