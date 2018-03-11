import React, { Component } from 'react';
import Announcement from './Announcement.js';
import news from "../data/news.json";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0', initdropdown: true, numberShown: 4};
  }
  componentWillMount(){
    if (window.innerWidth <= 640){
      window.scrollTo(0, 0);
    }
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  showMoreArticles = () => {
    this.setState(prevState => {
      return {numberShown: prevState.numberShown + 4}
    });
  }
  componentDidUpdate(){
    if (this.state.initdropdown === true & this.state.numberShown > news.length){
      this.setState({initdropdown: false});
    }
  }
  render() {
    let iframelink = `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftriangleiww%2Fevents%2F&tabs=timeline&width=${this.state.width}&height=1000&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=196378587576073`
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
    let newsArticles = news.map((x, i) =>{
      let key = `news${i}`;
      return (
        <div key={key} className={this.state.initdropdown ? ("newsstyles") : ("")}>
          <p className="leftaligned">
            <a href={x.link} target="_blank" rel="noopener noreferrer">
            {x.title}
            </a><br/>
            {x.source} - {x.datePublished}
          </p>
        </div>
      )
    });
    return (
      <div className="Homepage component" itemScope itemType="http://schema.org/WebPage">
        <div itemScope itemProp="mainContentOfPage">
        <style>{`
          .newsstyles:nth-child(-n+${this.state.numberShown}){
            display:block;
          }
        `}</style>
          <h4 className="leftaligned">
            Recent News
          </h4>
          <div>
            {newsArticles}
            <div className={this.state.initdropdown ? ("showMoreButton") : ("noShowButton")}
              onClick={this.showMoreArticles}>
              Show More
            </div>
          </div>
          <h4 className="leftaligned">
            Facebook Feed
          </h4>
          <iframe title="news" src={iframelink}
          style={iframestyles}></iframe>
        </div>
      </div>
    );
  }
}

export default Homepage;
