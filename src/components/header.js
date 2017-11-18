import React, { Component } from 'react';
import { NavLink, Link, Redirect } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }

  render() {
    return (
      <div className="Header">
        <NavLink className="verti-center" to="/">
          <input className='btn btn-link font-size-25px' type='submit' value='Home'/>
        </NavLink>
        <NavLink className="verti-center" to="/about">
          <input className='btn btn-link font-size-25px' type='submit' value='About'/>
        </NavLink>
        <NavLink className="verti-center" to="/news">
          <input className='btn btn-link font-size-25px' type='submit' value='News'/>
        </NavLink>
        <NavLink className="verti-center" to="/contact">
          <input className='btn btn-link font-size-25px' type='submit' value='Contact'/>
        </NavLink>
        <NavLink className="verti-center" to="/events">
          <input className='btn btn-link font-size-25px' type='submit' value='Events'/>
        </NavLink>
        <NavLink className="verti-center" to="/iwoc">
          <input className='btn btn-link font-size-25px' type='submit' value='IWOC'/>
        </NavLink>
      </div>
    );
  }
}

export default Header;
