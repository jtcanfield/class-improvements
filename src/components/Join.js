import React, { Component } from 'react';

class Join extends Component {
  componentWillMount(){
    if (window.innerWidth <= 640){
      window.scrollTo(0, 0);
    }
  }
  render() {
    return (
      <div className="Join component">
        <div className="leftaligned">
          <h4>Join Us!</h4>
          <h5><a href="https://www.iww.org/PDF/Forms/join.pdf" target="_blank" rel="noopener noreferrer">You can download the form here ...</a></h5>
          <p>Or you can fill out the form electronically below!</p>
        </div>
      </div>
    );
  }
}

export default Join;
