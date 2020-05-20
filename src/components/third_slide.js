import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class ThirdSlide extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        return(
            <div>
               {this.props.sliderValue}
               <br/>
               <Link to='/slideTwo'>Go Back</Link>
            </div>
        )
    }
}

const msp = (state) => ({
    sliderValue: state.value,
    salary: state.salary,
    expenses: state.expenses,
    savings: state.savings
});

export default connect(msp, null)(ThirdSlide);