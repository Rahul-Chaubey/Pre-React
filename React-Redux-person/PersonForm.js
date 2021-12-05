import { getDefaultNormalizer } from "@testing-library/dom";
import React, {Component} from "react";
import { connect } from "react-redux";

 class PersonForm extends Component {
    state = {
        Name: "",
        Age: 0,
    };

    onValueChangeHandler = (event) => {
        const {name, value} =event.target;
        this.setState({ [name]: value});
    }

    onFormSubmtHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.addPerson(this.state);
    };


    render() {
        return <>
        <h1>In PersonForm</h1>
        <form onSubmit={this.onFormSubmtHandler}>

        <div className = "mb-3">
            <label className="form-label">Name:</label>
            <input 
            className = "form-control"
            name = {"Name"}
            value = {this.state.Name}
            onChange={this.onValueChangeHandler} />
        </div>

            <div className = "mb-3">
            <label className="form-label">Age:</label>
            <input 
            className = "form-control"
            name = {"Age"}
            value = {this.state.Age}
            onChange={this.onValueChangeHandler} />
            </div>

            <button className="btn btn-success" type="submit">Submit</button>

        </form>
        </>
    };
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPerson: (payload) => dispatch({type: "PERSON_ADD", payload:payload}),
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(PersonForm);