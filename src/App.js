import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateEditResume from './CreateEditResume';
import ViewResume from './ViewResume';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={CreateEditResume} />
          <Route path="/view-resume" component={ViewResume} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
