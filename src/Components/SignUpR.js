import React, { Component } from "react";
import "../css/SignUp.css";
// import ReactDOM from 'react-dom';
// import Modal from "react-modal";

class SignUp extends Component {

  render() {
    return (
      <div id="element">
        <h2>Reserve and Check in</h2>
          <form id="theForm" onSubmit={this.handleSubmit} className="form">
            <label htmlFor="name">Enter name</label>
            <input
              id="name"
              name="first_name"
              type="text"
              placeholder="name"
              title="Please enter valid name"
              required
            />

            <label htmlFor="email">Enter your email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="youremail@example.com"
              title="Please us a valid email"
              required
            />

            <label htmlFor="tel">Number of people</label><br/>
            <select
            title="Please select an option"
            required
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              
            </select>
            <div className="clearfix">
              <button className="signupbtn">Submit</button>
            </div>
          </form>
      </div>
    );
  }
}

export default SignUp;
// Modal.setAppElement(document.getElementById('element'));
