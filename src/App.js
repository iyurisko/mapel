import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Mapel from './pages/mapel';

import './App.css';


function App() {
  return (
    <div align="center" >
        <Router>
            <Switch>
              <Route exact path='/mapel' component={Mapel} />
            </Switch>
        </Router>

      </div>

  );
}

export default App;
