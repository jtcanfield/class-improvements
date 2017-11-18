import React, { Component } from 'react';
import request from 'superagent';

class Events extends Component {
  componentDidMount(){
    request
      .get(`graph.facebook.com/v2.11/1587504814641018`)
      .set({"access_token": "196378587576073"})
       .end((err, res) => {
         console.log(err);
         console.log(res);
       })
  }
  render() {
    let styles = {
      "width":"100%",
      "height":"900px",
      "border":"none",
      "overflow":"hidden",
      "scrolling":"yes",
      "frameborder":"0",
      "allowTransparency":"true",
    }
    let iframelink = `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftriangleiww%2Fevents%2F&tabs=timeline&width=540&height=900&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=196378587576073`
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
