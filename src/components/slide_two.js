import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from "react-google-login";


const CLIENT_ID = "876582935749-1dhphtb8pel2td9q1n3biniq443kupj9.apps.googleusercontent.com";
class SlideTwo extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  logout(response) {
    console.log("Success");
  }

  handleLogoutFailure(response) {
    alert("Failed to log out");
  }
  
  render() {
    return (
      <div>
        <GoogleLogout
          clientId={CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={this.logout}
          onFailure={this.handleLogoutFailure}
        ></GoogleLogout>
        <div>Welcome to your monthly budget</div>
      </div>
    );
  }
}

const msp = (state) => ({});

const mdp = (dispatch) => ({});

export default connect(msp, mdp)(SlideTwo);