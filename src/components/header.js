import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }

  render() {
    return (
      <div className="Header">
        <div>
          <h3>Raleigh-Durham Industrial Workers of the World</h3>
        </div>
        <div className="navlinks">
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            to="/home">
            <span className='btn font-size-25px'>Home</span>
          </NavLink>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            to="/about">
            <span className='btn font-size-25px'>About</span>
          </NavLink>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            to="/contact">
            <span className='btn font-size-25px'>Contact</span>
          </NavLink>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            to="/events">
            <span className='btn font-size-25px'>Events</span>
          </NavLink>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            to="/iwoc">
            <span className='btn font-size-25px'>IWOC</span>
          </NavLink>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            to="/gdc">
            <span className='btn font-size-25px'>GDC</span>
          </NavLink>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            to="/wfw">
            <span className='btn font-size-25px'>WFW</span>
          </NavLink>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            to="/donate">
            <span className='btn font-size-25px'>Donate</span>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
