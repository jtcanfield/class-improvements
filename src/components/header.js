import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }

  render() {
    let iww = {
      "color":"#847878",
      "fontSize":"1.3rem",
    }
    let iwwlogo = {
      "maxHeight":"250px",
    }
    return (
      <div className="Header">
        <div style={iww}>
          Raleigh-Durham Industrial Workers of the World
        </div>
        <div>
          <img alt="IWW Logo" src="./IWW-Raleigh-Durham.png" className="iwwlogo" style={iwwlogo}/>
        </div>
        <div className="navlinks">
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            to="/home">
            Home
          </NavLink>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            to="/about">
            About
          </NavLink>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            to="/contact">
            Contact
          </NavLink>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            to="/events">
            Events
          </NavLink>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            to="/iwoc">
            IWOC
          </NavLink>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            to="/gdc">
            GDC
          </NavLink>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            to="/wfw">
            WFW
          </NavLink>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            to="/donate">
            Donate
          </NavLink>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            to="/posters">
            Posters
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
