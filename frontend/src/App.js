import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CompanyList from './components/CompanyList';
import CompanyDetails from './components/CompanyDetails';
import Visualizations from './components/Visualizations';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/companies" component={CompanyList} />
          <Route path="/company/:id" component={CompanyDetails} />
          <Route path="/visualizations" component={Visualizations} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
