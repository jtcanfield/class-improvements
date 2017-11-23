import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalbuttonactive:false,
    };
    this.click = this.click.bind(this)
  }
  click(){
    this.setState({modalbuttonactive:!this.state.modalbuttonactive})
  }
  render() {
    let arrowclasses = "modalbutton hiddenmodal";
    let actualarrow = "smallarrowright";
    let modalclasses = "navlinks hiddenmodal";
    let openmodalbackground = "";
    if(this.state.modalbuttonactive){
      arrowclasses = "modalbutton shownmodal";
      actualarrow = "smallarrowleft";
      modalclasses = "navlinks shownmodal bg-light";
      openmodalbackground = "openmodalbackground";
    }
    return (
      <div className="Header">
        <div className="header_logo_title">
          <div className="title_of_page">
            Raleigh-Durham Industrial Workers of the World
          </div>
          <div className="fade"></div>
          <img alt="IWW Logo" src="./IWW-Raleigh-Durham.png" className="iwwlogo"/>
          <div className="curveholder">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
             width="1200.000000pt" height="129.000000pt" viewBox="0 0 1200.000000 129.000000"
             preserveAspectRatio="xMidYMax meet">
              <g transform="translate(0.000000,129.000000) scale(0.100000,-0.100000)"
              fill="#000000" stroke="none">
              <path d="M0 1037 l0 -156 38 -11 c120 -34 664 -167 877 -214 1516 -336 2945
              -515 4525 -567 396 -13 1439 -7 1790 10 1475 73 2782 242 4030 521 170 38 614
              146 703 170 l37 11 0 174 c0 96 -2 175 -5 175 -3 0 -99 -25 -213 -56 -519
              -139 -1334 -335 -1812 -435 -1025 -215 -1859 -350 -2670 -433 -753 -77 -1448
              -87 -2180 -31 -1399 108 -3320 481 -5102 992 -17 5 -18 -7 -18 -150z"/>
              </g>
            </svg>
          </div>
        </div>
        <div onClick={this.click} className={arrowclasses}>
          <span alt="open menu" className={actualarrow}></span>
        </div>
        <div className={modalclasses}>
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
        <div onClick={this.click} className={openmodalbackground}></div>
      </div>
    );
  }
}

export default Header;
