import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';

class App extends Component{

  renderHome = () => <HomeContainer></HomeContainer>

  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={this.renderHome} />
        <Route exact path="/customers" component={CustomersContainer} />
      </div>
    </Router>
    );
  }
}
export default App;
