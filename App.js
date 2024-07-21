import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import InteractiveLessons from './pages/InteractiveLessons';
import Support from './pages/Support';
import Math from './pages/Math';
import Science from './pages/Science';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/interactive-lessons" component={InteractiveLessons} />
        <Route path="/support" component={Support} />
        <Route path="/math" component={Math} />
        <Route path="/science" component={Science} />
      </Switch>
    </Router>
  );
}

export default App;
