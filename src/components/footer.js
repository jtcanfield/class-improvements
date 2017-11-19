import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }

  render() {
    return (
      <div className="Footer">
        <p>
          See us on Facebook at <a href="https://www.facebook.com/triangleiww/" target="blank">
            https://www.facebook.com/triangleiww/
          </a> or Twitter <a href="https://twitter.com/triangleiww" target="blank">
            @triangleiww
          </a>
        </p>
        <p>Copyright 2017</p>
      </div>
    );
  }
}

export default Footer;
