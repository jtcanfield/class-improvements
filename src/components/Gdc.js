import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Gdc extends Component {
  render() {
    let bannerpicture = {
      "maxWidth":"700px",
      "width":"100%",
    }
    let gdclogo = {
      "maxHeight":"250px",
    }
    return (
      <div className="Gdc">
        <img alt="General Defense Comittee Holding Anti-Klan Banner" style={bannerpicture} src="./GDCantiklanbanner.jpg"/>
        <h4 className="leftaligned">General Defense Committee</h4>
        <p>The Industrial Workers of the World (IWW)'s General Defense Committee (GDC) was formed to defend working class people fighting for their rights on the picket line and in their community.</p>
        <div className="leftaligned">
          <p>The GDC aims include:</p>
          <ul>
            <li>Providing support to any member of the working class who finds themselves in legal trouble due to their involvement in the class war.</li>
            <li>Organizing against forces of oppression that divide the working class, including colonialism, fascism, heterosexism, racism, patriarchy, state repression, transphobia, and xenophobia, among others.</li>
            <li>Building networks for community-based self-defense.</li>
          </ul>
          <img className="imgtest" alt="General Defense Comittee Logo" style={gdclogo} src="./GDCbanner.jpeg"/>
          <p>The Raleigh-Durham GDC's projects currently include:</p>
          <ul>
            <li>Organizing to counter the resurgent movements of white supremacists, neo-Confederates, and the  'alt-right'</li>
            <li>Community-based food distribution (with Workers Feeding Workers)</li>
            <li>Campaigns for building renters' power against landlords</li>
            <li>Organizing to defend people from state and right-wing repression</li>
          </ul>
        </div>
        <p>
        Are you interested in getting involved with the GDC?<br/>
        Have ideas for how you'd like to contribute or collaborate?
        <br/>
        <NavLink to="/contact">Contact us!</NavLink>
        </p>
      </div>
    );
  }
}

export default Gdc;
