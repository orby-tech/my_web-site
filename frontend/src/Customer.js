import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

import  CustomersList from './CustomersList'
import  CustomerCreateUpdate  from './CustomerCreateUpdate'

class Custumer extends Component {

	render() {
		return(
      <div>

        <BrowserRouter>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link  className="nav-link" to="/customers">CUSTOMERS</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to="/customers/customer">CREATE CUSTOMER</Link>
            </li>
          </ul>

        </BrowserRouter>

      </div>
			)
	}
}


export default Custumer;

