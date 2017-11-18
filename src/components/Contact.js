import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0' };
  }
  componentWillMount(){
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    let eventsstyles = {
      "margin":"0 auto",
      "textAlign":"center",
    }
    let iframelink = `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftriangleiww%2Fevents%2F&tabs=messages&width=500&height=300&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=196378587576073`
    let iframestyles = {
      "width":`500px`,
      "height":`300px`,
      "border":"none",
      "overflow":"hidden",
      "scrolling":"no",
      "frameborder":"0",
      "allowTransparency":"true",
    }
    return (
      <div className="Contact" style={eventsstyles}>
        <h1>Contact Us</h1>
        <iframe title="events" src={iframelink}
        style={iframestyles}></iframe>
      </div>
    );
  }
}

export default Contact;
