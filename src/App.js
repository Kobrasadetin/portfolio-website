import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Toolbar from '@material-ui/core/Toolbar';

import Articles from './articles/Articles'
import Home from './home/Home'


function App() {
  return (
    <div className="App">
      <Toolbar className="App-header">
        this is a website.
      </Toolbar>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/articles" component={Articles} />
        </div>
      </Router>
    </div>
  );
}

export default App;
