import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import Search from './pages/Search';
import Library from './pages/Library';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Container style={{padding: '15px'}}>
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
      </Container>
    </Router>
  )
}

export default App;
