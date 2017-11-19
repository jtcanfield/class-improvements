import React, { Component } from 'react';


class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0' };
  }
  componentWillMount(){
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    let iframelink = `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftriangleiww%2Fevents%2F&tabs=timeline&width=${this.state.width}&height=1000&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=196378587576073`
    let iframestyles = {
      "width":`${this.state.width}px`,
      "height":`1000px`,
      "border":"none",
      "overflow":"hidden",
      "scrolling":"no",
      "frameborder":"0",
      "allowTransparency":"true",
    }
    if(this.state.width > 520){
      iframestyles = {
        "width":`500px`,
        "height":`1000px`,
        "border":"none",
        "overflow":"hidden",
        "scrolling":"no",
        "frameborder":"0",
        "allowTransparency":"true",
      }
    }
    return (
      <div className="Homepage">
        <h4 className="leftaligned">Recent News</h4>
        <iframe title="news" src={iframelink}
        style={iframestyles}></iframe>
      </div>
    );
  }
}

export default Homepage;
