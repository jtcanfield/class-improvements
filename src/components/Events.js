import React, { Component } from 'react';
import request from 'superagent';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0' };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  componentDidMount(){
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    request
      .get(`graph.facebook.com/v2.11/1587504814641018`)
      .set({"access_token": "196378587576073"})
       .end((err, res) => {
       })
  }
  render() {
    let styles = {
      "width":`500px`,
      "height":`1000px`,
      "border":"none",
      "overflow":"hidden",
      "scrolling":"yes",
      "frameborder":"0",
      "allowTransparency":"true",
    }
    let iframelink = `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftriangleiww%2Fevents%2F&tabs=timeline&width=500&height=1000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=196378587576073`
    return (
      <div className="Events">
        <h1>Events</h1>
        <iframe src={iframelink}
        style={styles}></iframe>
      </div>
    );
  }
}

export default Events;
