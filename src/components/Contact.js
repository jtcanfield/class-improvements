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
      .end((err, res) => {})
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
        if(res === undefined){
          this.setState({errormessages:"Internal Server Error"});
        } else if(res.statusCode === 400){
          this.setState({errormessages:res.text});
        } else if(res.statusCode === 200){
          alert("Thank you for contacting us! We will reach out to you soon!");
          window.location.reload();
        } else {
          this.setState({errormessages:"Internal Server Error"});
        }
      })
  }
  render() {
    let container = {
      "margin":"0 auto",
      "textAlign":"center",
      "padding":"0 10px"
    }
    let iframelink = `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftriangleiww%2Fevents%2F&tabs=messages&width=320&height=300&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=196378587576073`
    let iframestyles = {
      "width":`320px`,
      "height":`300px`,
      "border":"none",
      "overflow":"hidden",
      "scrolling":"no",
      "frameborder":"0",
      "allowTransparency":"true",
    }
    let textareastyle = {
      "width":"100%",
      "maxWidth":`500px`,
      "border":"2px solid black",
    }
    let submitbutton = {
      "width":`100%`,
      "maxWidth":`500px`,
      "backgroundColor":`red`,
      "fontSize":`24px`,
      "color":`white`,
      "border":`0`,
    }
    let leftaligned = {
      "textAlign":"left",
    }
    return (
      <div className="Contact" style={container}>
        <h4 style={leftaligned}>Contact Us</h4>
        <p style={leftaligned}>Questions? Comments? Want to join? Shoot us a message here or on Facebook!</p>
        <form className="enterForm" onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label><br/>
            <input style={textareastyle}
            type="email" onChange={this.updateFromField('email')}
            value={this.state.email}
            placeholder="email"
            id="email"
            required="true"/>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label><br/>
            <input style={textareastyle}
            type="tel" onChange={this.updateFromField('phone')}
            value={this.state.phone}
            placeholder="phone"
            id="phone"
            required="true"/>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label><br/>
            <textarea type="text" style={textareastyle} rows="5"
            onChange={this.updateFromField('message')}
            value={this.state.message}
            placeholder="message"
            id="message"
            required="true"/>
          </div>
          {this.state.errormessages ? (this.state.errormessages):"" }
          <br/><div>
            <button style={submitbutton} type="submit" onClick={event => this.submitform(event)}>
              Send Message
            </button>
          </div>
        </form>
        <br/><br/>
        <iframe title="events" src={iframelink}
        style={iframestyles}></iframe>
      </div>
    );
  }
}

export default Contact;
