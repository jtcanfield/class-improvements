import React, { Component } from 'react';


class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0' };
  }
  componentWillMount(){
    if (window.innerWidth <= 640){
      window.scrollTo(0, 0);
    }
    this.setState({ width: window.innerWidth, height: window.innerHeight });
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
    return (
      <div className="Homepage component">
        <h4 className="leftaligned">Recent News</h4>
        <div>
          <p>
            <a href="LINKHERE" target="_blank" rel="noopener noreferrer">
            TITLEHERE
            </a><br/>
            Its Going Down - February 15, 2016
          </p>
          <p>
            <a href="https://itsgoingdown.org/igd-durham-community-quickly-mobilizes-defeat-klan/" target="_blank" rel="noopener noreferrer">
            IGD Durham: Community Quickly Mobilizes to Defeat Klan
            </a><br/>
            Its Going Down - August 19, 2017
          </p>
          <p>
            <a href="https://itsgoingdown.org/durham-community-tears-down-statue-in-solidarity-with-cville/" target="_blank" rel="noopener noreferrer">
            Durham Tears Down Confederate Statue in Solidarity with Cville
            </a><br/>
            Its Going Down - August 15, 2017
          </p>
          <p>
            <a href="https://itsgoingdown.org/raleigh-durham-nc-iwoc-friends-picket-nc-department-public-safety/" target="_blank" rel="noopener noreferrer">
            Raleigh-Durham, NC: IWOC and Friends Picket NC Department of ‘Public Safety’
            </a><br/>
            Its Going Down - June 26, 2017
          </p>
          <p>
            <a href="https://itsgoingdown.org/raleigh-nc-report-back-united-racism-islamophobia/" target="_blank" rel="noopener noreferrer">
            Raleigh, NC: Report-Back from “United Against Racism and Islamophobia”
            </a><br/>
            Its Going Down - June 11, 2017
          </p>
          <p>
            <a href="https://itsgoingdown.org/call-campaign-iwoc-member-stanley-corbett-jr/" target="_blank" rel="noopener noreferrer">
            Call-In Campaign for IWOC Member Stanley Corbett Jr.
            </a><br/>
            Its Going Down - March 20, 2017
          </p>
          <p>
            <a href="https://itsgoingdown.org/durham-iww-stands-striking-prisoners/" target="_blank" rel="noopener noreferrer">
            Durham: IWW stands with Striking Prisoners!
            </a><br/>
            Its Going Down - August 11, 2016
          </p>
          <p>
            <a href="https://itsgoingdown.org/final-straw-inside-outside-alliance-deaths-durham-county-jail-nc/" target="_blank" rel="noopener noreferrer">
            Final Straw: Inside Outside Alliance on deaths in Durham County Jail, NC
            </a><br/>
            Its Going Down - February 15, 2016
          </p>
        </div>
        <h4 className="leftaligned">Facebook Feed</h4>
        <iframe title="news" src={iframelink}
        style={iframestyles}></iframe>
      </div>
    );
  }
}

export default Homepage;
