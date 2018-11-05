import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../sites/home';
import User from '../sites/user';

const  RouterComponent = () => {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
          </ul>
  
          <hr />
  
          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
  
        </div>
      </Router>
    );
  }

  export default RouterComponent;
