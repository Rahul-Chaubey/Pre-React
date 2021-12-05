import React, {Component} from "react";
import { connect } from "react-redux";


class CourseForm extends Component {
    state = {
        CourseName: "",
        CourseFee: 0,
    };


    onValueChangeHandler = (event) => {
        const {name, value} =event.target;
        this.setState({ [name]: value});
    }

    onFormSubmtHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.addCourse(this.state);
    };


    render() {
        return <>
          <h1>In CourseForm</h1>
        <form onSubmit={this.onFormSubmtHandler}>

        <div className = "mb-3">
            <label className="form-label">CourseName:</label>
            <input 
            className = "form-control"
            name = {"CourseName"}
            value = {this.state.CourseName}
            onChange={this.onValueChangeHandler} />
        </div>

            <div className = "mb-3">
            <label className="form-label">CourseFee:</label>
            <input 
            className = "form-control"
            name = {"CourseFee"}
            value = {this.state.CourseFee}
            onChange={this.onValueChangeHandler} />
            </div>

            <button className="btn btn-success" type="submit">Submit</button>

        </form>
        </>
    }
}

const mapStateToProps = (state) => {
    return{};
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCourse: (payload) => dispatch({type: "COURSE_ADD", payload:payload}),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(CourseForm);