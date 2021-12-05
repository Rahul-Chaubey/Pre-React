import React, {Component} from "react";
import { connect } from "react-redux";


class Counter extends Component {
    state = {
        inputValue: 0,
    };

    onValueChangeHandler = (event) => {
        this.setState({inputValue: event.target.value});
    };

    render() {
        return(
        <>
        {/* console.log(this.props); */}
         <h1>Counter: {this.props.counter}</h1>
        <input value={this.state.inputValue} 
            onChange={this.onValueChangeHandler}/>
        <br />
        <button onClick={()=> {
            this.props.increment(parseInt(this.state.inputValue));
        }}>Increment</button>

        <button onClick={() => {
            this.props.decrement(parseInt(this.state.inputValue));
        }}>Decrement</button>
       
        </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter : state.counter,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (value)  => dispatch({type: "increment" , value: value}),
        decrement: (value)  => dispatch({type: "decrement" , value: value}),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);