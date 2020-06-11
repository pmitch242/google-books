import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import Home from './pages/Home';
import Shelf from './pages/Shelf';
import ProjectDetails from './components/BookDetails';

import SearchBar from './components/SearchBar';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Container style={{ padding: '15px' }}>
        <SearchBar />

        <Switch>
          <Route exact path={['/', '/home']} component={ Home } />

          <Route exact path={['/shelf']} component={ Shelf }/>

          <Route path={['/book/:id']} component={ ProjectDetails } />

          <Route >
            <h1>No page found</h1>
          </Route>
        </Switch>

      </Container>
    </Router>
  )
}

export default App;
