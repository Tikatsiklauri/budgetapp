import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { connect } from 'react-redux';



const CLIENT_ID = "876582935749-1dhphtb8pel2td9q1n3biniq443kupj9.apps.googleusercontent.com";


class GoogleBtn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedin: false,
            accessToken: ''
        };

        this.login = this.login.bind(this);
        this.handleLoginFailure = this.handleLoginFailure.bind(this);
        this.logout = this.logout.bind(this);
        this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
    }

    login(response) {
        // debugger
        if (response.accessToken) {
            this.setState(state => ({
                isLoggedin: true,
                accessToken: response.accessToken
            }));
        }
       
    }

    logout(response) {
        this.setState(state => ({
            isLoggedin: false,
            accessToken: ''
        }));
    }

    handleLoginFailure(response) {
        alert('Failed to log in')
    }

    handleLogoutFailure(response) {
        alert('Failed to log out')
    }

    render() {
        return (
            <div>
                {this.state.isLoggedin ?
                    <GoogleLogout
                        clientId={CLIENT_ID}
                        buttonText='Logout'
                        onLogoutSuccess={this.logout}
                        onFailure={this.handleLogoutFailure}
                    >
                    </GoogleLogout> : <GoogleLogin
                        clientId={CLIENT_ID}
                        buttonText='Log in with Google'
                        onSuccess={this.login}
                        onFailure={this.handleLoginFailure}
                        cookiePolicy={'single_host_origin'}
                        responseType='code,token'
                    />
                }
                {/* {this.state.accessToken ? <h5>Your Access Token: <br /><br /> {this.state.accessToken}</h5> : null} */}

            </div>
        )
    }
}

const mdp = dispatch => {
    return {
        toggle: function(isLoggedin) {
            let action = isLoggedin ? this.state.accessToken : null;
        dispatch(action)
        }
    }
}
   

export default connect(null, mdp)(GoogleBtn);