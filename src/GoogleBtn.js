import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux';
import { receiveCurrentUser } from './store';
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";



const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`
animation: 1s ${bounceAnimation};
`;
const Container = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%);
`;


const CLIENT_ID = "876582935749-1dhphtb8pel2td9q1n3biniq443kupj9.apps.googleusercontent.com";


class GoogleBtn extends Component {
    constructor(props) {
        super(props);



        this.login = this.login.bind(this);
        this.handleLoginFailure = this.handleLoginFailure.bind(this);
     
    }

    login(response) {
        if (response.accessToken) {
            this.props.isLoggedin(response.profileObj.name);
        }
    }


    handleLoginFailure(response) {
        alert('Failed to log in')
    }


    render() {
        return (
          <div className="App-header">
          <Card
            style={{
              width: "500px",
              height: "500px",
              display: "flex",
              flexDirection: "column",
              margin: "0px auto",
              marginTop: "30px",
              backgroundColor: "#c5cae9"
            }}
          >
            <CardContent>
              <Typography
              
                color="textSecondary"
                gutterBottom
                style={{fontSize: "26px"}}
              >
                Budget Planner
              </Typography>
            </CardContent>
            <CardActions style={{justifyContent: "center", marginTop: "150px"}}>
              
                {/* <Container> */}
                <BouncyDiv>
                  <GoogleLogin
                    clientId={CLIENT_ID}
                    buttonText="Sign in with Google"
                    onSuccess={this.login}
                    onFailure={this.handleLoginFailure}
                    cookiePolicy={"single_host_origin"}
                    responseType="code,token"
                  />
                </BouncyDiv>
                {/* </Container> */}
          
            </CardActions>
          </Card>
          </div>
        );
    }
}

const mdp = dispatch => {
 
    return {
        isLoggedin: (user) => dispatch(receiveCurrentUser(user))
    }
}



export default connect(null, mdp)(GoogleBtn);