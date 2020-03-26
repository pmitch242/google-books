import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './pages/Search';
import Library from './pages/Library';

function App() {
  return (
    <Switch>
      <Router>
        <div>
          <Route exact path={['/', '/search']}>
            <Search />
          </Route>
          <Route exact path={['/library']}>
            <Library />
          </Route>
          {/* <Route ></Route> */}
        </div>
      </Router>
    </Switch>
  )
}

export default App;
