import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import Home from './pages/Home';
import Shelf from './pages/Shelf';

import SearchBar from './components/SearchBar';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Container style={{ padding: '15px' }}>
        <SearchBar />

        <Switch>
          <Route exact path={['/', '/home']}>
            <Home />
          </Route>

          <Route exact path={['/shelf']}>
            <Shelf />
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
