import React, { Component } from 'react';
import request from 'superagent';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '0',
      height: '0',
      email: "",
      phone: "",
      message: "",
      errormessages: false,
    };
    this.submitform=this.submitform.bind(this);
  }
  componentWillMount(){
    request
      .post(`http://localhost:5000/wakeup`)
      .end((err, res) => {
        console.log(res.text);
      })
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  updateFromField(stateKey) {
    return (event) => {
      this.setState({[stateKey]: event.target.value, errormessages:false});
    }
  }
  submitform(event){
    event.preventDefault();
    var data = {
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message
    }
    request
      .post(`http://localhost:5000/sendemail`)
      .send(data)
      .end((err, res) => {
        if(res.statusCode === 400){
          this.setState({errormessages:res.text});
          console.log("ITS ALL WRONG");
        }
        console.log(err);
        console.log(res);
      })
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
          <div className="form-group">
            <h6>Message:</h6>
            <textarea type="text" rows="4" cols="50"
            onChange={this.updateFromField('message')}
            value={this.state.message}
            placeholder="message"
            required="true"/>
          </div>
          {this.state.errormessages ? (this.state.errormessages):"" }
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
