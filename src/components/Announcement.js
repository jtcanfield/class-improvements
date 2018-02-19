import React, { Component } from 'react';

class Announcement extends Component {
  render() {
    return (
      <div className="announcements">
        <h3>
          Important Announcement
        </h3>

        <h5>
          Fellow Workers,
        </h5>

        <h5 className="leftaligned p-2">
          The Raleigh-Durham IWW needs your help. A Fellow Worker involved in a local workplace organizing campaign has been fired and is in need of immediate financial assistance. Their family is facing eviction on February 24.
        </h5>

        <h5 className="leftaligned p-2">
          The organizing campaign has not gone public so we are trying to be discrete and not using the worker's name in this appeal.
        </h5>

        <h4 className="p-2">
          <a href="https://www.paypal.me/rdiwwgmb" target="_blank" rel="noopener noreferrer">
            If you are able, please click here to make a donation.
          </a>
        </h4>
      </div>
    );
  }
}

export default Announcement;
