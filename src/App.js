import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';

class App extends Component{

  renderHome = () => <HomeContainer></HomeContainer>

  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={this.renderHome} />
        <Route exact path="/customers" component={CustomersContainer} />
        <Switch>
            <Route path="/customers/new" component={<p>/customers/new</p>} />
            <Route path="/customers/:dni" 
                     render={props => <CustomerContainer dni={props.match.params.dni} />} />
          </Switch>
      </div>
    </Router>
    );
  }
}
export default App;
