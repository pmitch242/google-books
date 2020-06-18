import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from 'react-bootstrap/Container';

// components
import SearchBar from './components/SearchBar';
import BottomNav from './components/BottomNav';
import ProjectDetails from './components/BookDetails';

// pages
import Home from './pages/Home';
import Shelf from './pages/Shelf';
import Search from './pages/Search'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Container style={{ padding: '15px' }}>
        <SearchBar />

        <Switch>
          <Route exact path={'/'} component={ Home } />

          <Route exact path={'/shelf'} component={ Shelf }/>
          
          <Route exact path={'/search'} component={ Search }/>

          <Route path={['/book/:id']} component={ ProjectDetails } />

          <Route >
            <h1>No page found</h1>
          </Route>
        </Switch>

        <BottomNav />
      </Container>
    </Router>
  )
}

export default App;
