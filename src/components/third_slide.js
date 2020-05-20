import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import WorkIcon from "@material-ui/icons/Work";
import Divider from "@material-ui/core/Divider";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import '../index.css';

class ThirdSlide extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        return (
          <div style={{ margin: "0 auto", width: "75%" }}>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ShowChartIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Elected Percentage"
                  secondary={`${this.props.sliderValue}%`}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Salary"
                  secondary={`$ ${this.props.salary}`}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <CreditCardIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Expenses"
                  secondary={`$ ${this.props.expenses}`}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AccountBalanceIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Savings"
                  secondary={`$ ${this.props.savings}`}
                />
              </ListItem>
            </List>
            <Link to="/slideTwo" className="button">Go Back</Link>
          </div>
        );
    }
}

const msp = (state) => ({
    sliderValue: state.value,
    salary: state.salary,
    expenses: state.expenses,
    savings: state.savings
});

export default connect(msp, null)(ThirdSlide);