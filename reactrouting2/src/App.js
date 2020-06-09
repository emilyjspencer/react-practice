import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
  import { Link } from 'react-router-dom';
  import { BrowserRouter as Route} from 'react-router-dom';
  import HomeComponent from './HomeComponent';
  import Dashboard from './Dashboard';
  import Users from './Users';
  import Chatroom from './Chatroom';

class App extends Component {
    render() {
        return (
            <div class="container">
                <nav>
                  <Route>
                   <Link to="/">Home</Link>
                   <Link to="/dashboard">Dashboard</Link>
                   <Link to="/Users">Users</Link>
                   <Link to="/Chatroom">Chatroom</Link>
                  </Route>
                </nav>
                <Route
                    path="/"
                    component={HomeComponent}
                    exact> 
                </Route>
                <Route
                    path="/dashboard"
                    component={Dashboard}>
                </Route>
                <Route
                    path="/users"
                    component={Users}>
                </Route>
                <Route
                    path="/chatroom"
                    component={Chatroom}>
                </Route>
            </div>
        );
    }
}

export default App;