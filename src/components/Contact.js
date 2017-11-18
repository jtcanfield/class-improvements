import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '0',
      height: '0',
      email: "",
      phone: "",
    };
    this.submitform=this.submitform.bind(this);
  }
  componentWillMount(){
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  updateFromField(stateKey) {
    return (event) => {
      this.setState({[stateKey]: event.target.value});
    }
  }
  submitform(event){
    // event.preventDefault();
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
        <form className="enterForm" onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <h6>Email:</h6>
            <input type="email" onChange={this.updateFromField('email')}
            value={this.state.email}
            placeholder="email"
            required="true"/>
          </div>
          <div className="form-group">
            <h6>Phone:</h6>
            <input type="tel" onChange={this.updateFromField('phone')}
            value={this.state.phone}
            placeholder="phone"
            required="true"/>
          </div>
          {this.state.message ? this.state.message : ""}<br/>
          <div className="form-group pull-right">
            <button className="btn btn-primary btn-lg" type="submit" onClick={event => this.submitform(event)}>Submit</button>
          </div>
        </form>
        <iframe title="events" src={iframelink}
        style={iframestyles}></iframe>
      </div>
    );
  }
}

export default Contact;
