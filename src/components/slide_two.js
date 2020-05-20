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
import styled from 'styled-components';

const Button = styled.input`
  background: linear-gradient(102.24deg, #9B51E0 0%, #3436E7 100%);
  box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
  color: white;
  height: 50px;
  width: 50%;
  margin: 0 auto;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    transform: translateY(-3px);
  }
`;




const CLIENT_ID = "876582935749-1dhphtb8pel2td9q1n3biniq443kupj9.apps.googleusercontent.com";

class SlideTwo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 15,          //this is the default value
      salary: 0,
      expenses: 0,
      savings: 0
    }

    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateSlider = this.updateSlider.bind(this);
    this.updateSalary = this.updateSalary.bind(this);
    this.calculate = this.calculate.bind(this);
   
  }

  logout(response) {
    this.props.logout();
  }

  handleLogoutFailure(response) {
    alert("Failed to log out");
  }


  updateSlider(event, value){
    this.setState({ value });
    this.calculate();
   
  }

  updateSalary(e) {
    const salary = parseInt(e.currentTarget.value);
    this.setState({salary});
    this.calculate(this.state.value, salary);
  }
    
  calculate(value, salary) {
    // const {salary, value} = this.state;
    if (salary && value) {
      const expenses = Math.floor((salary / 12)* (value / 100));
      const savings = Math.floor((salary / 12) * (1 - (value / 100)));
      console.log(salary);
      console.log(value);
      this.setState({expenses, savings});
    }
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
        <div style={{ display: "flex", flexDirection: "column", width: "50%", margin: "0px auto", marginTop: "20px"}}>
          <form onSubmit={this.handleSubmit} style={{display: "flex", flexDirection: "column"}}>
          <Typography id="discrete-slider-custom" gutterBottom>
            Calculate Your Budget
          </Typography>
          <Slider
            onChange={this.updateSlider}
            defaultValue={15}
            aria-labelledby="discrete-slider-custom"
            step={1}
            max={30}
            valueLabelDisplay="auto"
            // style={{width: "50%"}}
          />
            <TextField id="outlined-basic" label="Your Salary" variant="outlined" onChange={this.updateSalary}/>
            <FormControl disabled>      
             <InputLabel htmlFor="component-disabled">Your expenses $</InputLabel>   
                <Input id="component-disabled" value={expenses} />
              <FormHelperText>Disabled</FormHelperText> 
            </FormControl>
            <br/>
            <FormControl disabled>
              <InputLabel htmlFor="component-disabled">Your savings $</InputLabel>
              <Input id="component-disabled" value={savings} />
              <FormHelperText>Disabled</FormHelperText>
            </FormControl>
            <Button type="submit"></Button>
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