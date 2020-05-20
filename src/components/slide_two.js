import React from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import { GoogleLogout } from "react-google-login";
import slideTwo from './slide_two.css';
import { logoutCurrentUser } from '../store';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import {budgetValues} from '../store';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';




const CLIENT_ID = "876582935749-1dhphtb8pel2td9q1n3biniq443kupj9.apps.googleusercontent.com";

class SlideTwo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      expenses: 0,
      savings: 0
    }

    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
   
  }

  logout(response) {
    this.props.logout();
  }

  handleLogoutFailure(response) {
    alert("Failed to log out");
  }


  update(event, value){
    this.setState({value});
    this.setState({expenses: value})
  }
    

  handleSubmit(){
    debugger
    this.props.receiveBudget(this.state);
    this.props.history.push('/thirdSlide')
    
    
  }

  
  render() {
    const {expenses, savings} = this.state;
    return (
      <div >
        <div className="mainDiv">
        <div className="welcome">Welcome to your monthly budget</div>
        <div className="logoutBtn">
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={this.logout}
            onFailure={this.handleLogoutFailure}>   
          </GoogleLogout>
        </div>
        </div>
        <div >
          <form onSubmit={this.handleSubmit} className="">
          <Typography id="discrete-slider-custom" gutterBottom>
            Custom marks
          </Typography>
          <Slider
            onChange={this.update}
            defaultValue={20}
            aria-labelledby="discrete-slider-custom"
            step={1}
            max={30}
            valueLabelDisplay="auto"
          />
            <TextField id="outlined-basic" label="Your Salary" variant="outlined" />
            <FormControl disabled>      
             <InputLabel htmlFor="component-disabled">Your expenses</InputLabel>   
                <Input id="component-disabled" value={expenses} />
              <FormHelperText>Disabled</FormHelperText> 
            </FormControl>
            <br/>
            <FormControl disabled>
              <InputLabel htmlFor="component-disabled">Your savings</InputLabel>
              <Input id="component-disabled" value={savings} />
              <FormHelperText>Disabled</FormHelperText>
            </FormControl>
            <input type="submit"></input>
          </form>
        </div>
      </div>
    );
  }
}

const msp = (state) => ({});

const mdp = (dispatch) => ({
  logout: () => dispatch(logoutCurrentUser()),
  receiveBudget: (payload) => dispatch(budgetValues(payload))
});

export default withRouter(connect(msp, mdp)(SlideTwo));