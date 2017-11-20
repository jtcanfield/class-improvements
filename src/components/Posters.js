import React, { Component } from 'react';

class Posters extends Component {
  render() {
    let posters = {
      "width":"100%",
      "marginBottom":"50px"
    }
    return (
      <div className="Posters">
        <h4 className="leftaligned">Posters</h4>
        <div className="poster_holder">
          <a href="./gdcflyer.jpg" target="blank"><h5 className="leftaligned">General Defense Comittee Flyer</h5>
          <img alt="General Defense Comittee Flyer" src="./gdcflyer.jpg" style={posters}/></a>
          <a href="./iepostercolor.jpg" target="blank"><h5 className="leftaligned">Anti-Identity Evropa Flyer</h5>
          <img alt="Community Defense Poster" src="./iepostercolor.jpg" style={posters}/></a>
          <a href="./iwwantinaziposter.jpg" target="blank"><h5 className="leftaligned">Anti-Nazi Poster</h5>
          <img alt="Anti-Nazi Poster" src="./iwwantinaziposter.jpg" style={posters}/></a>
        </div>
      </div>
    );
  }
}

export default Posters;
