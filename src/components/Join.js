import React, { Component } from 'react';
import request from 'superagent';

class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      email: "",
      telephone: "",
      employer: "",
      occupation: "",
      worker: false,
      constitution: false,
      errormessages: false,
    };
    this.submitform=this.submitform.bind(this);
    this.handlecheckboxchange=this.handlecheckboxchange.bind(this);
  }
  componentWillMount(){
    if (window.innerWidth <= 640){
      window.scrollTo(0, 0);
    }
  }
  updateFromField(stateKey) {
    return (event) => {
      this.setState({[stateKey]: event.target.value, errormessages:false});
    }
  }
  handlecheckboxchange = (event) => {
    this.setState({[event.target.id]: !this.state[event.target.id]});
  }
  submitform(event){
    event.preventDefault();
    console.log("Submitted");
    // var data = {
    //   email: this.state.email,
    //   phone: this.state.phone,
    //   message: this.state.message
    // }
    // request
    //   .post(`https://class-improvements-backend.herokuapp.com/sendemail`)
    //   .send(data)
    //   .end((err, res) => {
    //     if(res === undefined){
    //       this.setState({errormessages:"Internal Server Error"});
    //     } else if(res.statusCode === 400){
    //       this.setState({errormessages:res.text});
    //     } else if(res.statusCode === 200){
    //       alert("Thank you for contacting us! We will reach out to you soon!");
    //       window.location.reload();
    //     } else {
    //       this.setState({errormessages:"Internal Server Error"});
    //     }
    //   })
  }
  render() {
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
    return (
      <div className="Join component">
        <div className="leftaligned">
          <h4>Join Us!</h4>
          <h5><a href="https://www.iww.org/PDF/Forms/join.pdf" target="_blank" rel="noopener noreferrer">You can download and print the form here ...</a></h5>
          <p>Or you can fill out the form electronically below!</p>
        </div>
        <form className="enterForm" onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:<span className="requiredstar">*</span></label><br/>
            <input style={textareastyle}
            type="text" onChange={this.updateFromField('name')}
            value={this.state.name}
            placeholder="name"
            id="name"
            required="true"/>
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:<span className="requiredstar">*</span></label><br/>
            <input style={textareastyle}
            type="text" onChange={this.updateFromField('address')}
            value={this.state.address}
            placeholder="address"
            id="address"
            required="true"/>
          </div>
          <div className="form-group">
            <label htmlFor="city">City:<span className="requiredstar">*</span></label><br/>
            <input style={textareastyle}
            type="text" onChange={this.updateFromField('city')}
            value={this.state.city}
            placeholder="city"
            id="city"
            required="true"/>
          </div>
          <div className="form-group">
            <label htmlFor="state">State:<span className="requiredstar">*</span></label><br/>
            <input style={textareastyle}
            type="text" onChange={this.updateFromField('state')}
            value={this.state.state}
            placeholder="state"
            id="state"
            required="true"/>
          </div>
          <div className="form-group">
            <label htmlFor="zip">Zip:<span className="requiredstar">*</span></label><br/>
            <input style={textareastyle}
            type="text" onChange={this.updateFromField('zip')}
            value={this.state.zip}
            placeholder="zip"
            id="zip"
            required="true"/>
          </div>
          <div className="form-group">
            <label htmlFor="country">Country:<span className="requiredstar">*</span></label><br/>
            <input style={textareastyle}
            type="text" onChange={this.updateFromField('country')}
            value={this.state.country}
            placeholder="country"
            id="country"
            required="true"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:<span className="requiredstar">*</span></label><br/>
            <input style={textareastyle}
            type="email" onChange={this.updateFromField('email')}
            value={this.state.email}
            placeholder="email"
            id="email"
            required="true"/>
          </div>
          <div className="form-group">
            <label htmlFor="telephone">Telephone:<span className="requiredstar">*</span></label><br/>
            <input style={textareastyle}
            type="tel" onChange={this.updateFromField('telephone')}
            value={this.state.telephone}
            placeholder="telephone"
            id="telephone"
            required="true"/>
          </div>
          <div className="form-group">
            <label htmlFor="employer">Employer:<span className="requiredstar">*</span></label><br/>
            <input style={textareastyle}
            type="text" onChange={this.updateFromField('employer')}
            value={this.state.employer}
            placeholder="employer"
            id="employer"
            required="true"/>
          </div>
          <div className="form-group">
            <label htmlFor="occupation">Occupation:<span className="requiredstar">*</span></label><br/>
            <input style={textareastyle}
            type="text" onChange={this.updateFromField('occupation')}
            value={this.state.occupation}
            placeholder="occupation"
            id="occupation"
            required="true"/>
          </div>
          <div className="form-group">
            <label htmlFor="worker">Worker:<span className="requiredstar">*</span></label><br/>
            <input style={textareastyle}
            type="checkbox" onChange={this.handlecheckboxchange}
            checked={this.state.worker}
            value={this.state.worker}
            placeholder="worker"
            id="worker"
            required="true"/>
          </div>
          <div className="form-group">
            <label htmlFor="constitution">Constitution:<span className="requiredstar">*</span></label><br/>
            <input style={textareastyle}
            type="checkbox" onChange={this.handlecheckboxchange}
            checked={this.state.constitution}
            value={this.state.constitution}
            placeholder="constitution"
            id="constitution"
            required="true"/>
          </div>
          <div className="form-group">
            <label htmlFor="why">why:</label><br/>
            <textarea type="text" style={textareastyle} rows="5"
            onChange={this.updateFromField('why')}
            value={this.state.why}
            placeholder="why"
            id="why"/>
          </div>
          <div className="form-group">
            <label htmlFor="heardfrom">heardfrom:</label><br/>
            <textarea type="text" style={textareastyle} rows="5"
            onChange={this.updateFromField('heardfrom')}
            value={this.state.heardfrom}
            placeholder="heardfrom"
            id="heardfrom"/>
          </div>
          <div className="form-group">
            <label htmlFor="involved">involved:</label><br/>
            <textarea type="text" style={textareastyle} rows="5"
            onChange={this.updateFromField('involved')}
            value={this.state.involved}
            placeholder="involved"
            id="involved"/>
          </div>
          <div className="form-group">
            <label htmlFor="skills">skills:</label><br/>
            <textarea type="text" style={textareastyle} rows="5"
            onChange={this.updateFromField('skills')}
            value={this.state.skills}
            placeholder="skills"
            id="skills"/>
          </div>
          <div className="form-group">
            <label htmlFor="otherorganizations">otherorganizations:</label><br/>
            <textarea type="text" style={textareastyle} rows="5"
            onChange={this.updateFromField('otherorganizations')}
            value={this.state.otherorganizations}
            placeholder="otherorganizations"
            id="otherorganizations"/>
          </div>
          <div className="form-group">
            <label htmlFor="internet">internet:</label><br/>
            <textarea type="text" style={textareastyle} rows="5"
            onChange={this.updateFromField('internet')}
            value={this.state.internet}
            placeholder="internet"
            id="internet"/>
          </div>
          {this.state.errormessages ? (this.state.errormessages):"" }
          <br/><div>
            <button style={submitbutton} type="submit" onClick={event => this.submitform(event)}>
              Submit Application
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Join;
