import React, {Component} from "react";
import { connect } from "react-redux";


class CourseList extends Component {
    render() {
        console.log(this.props.courseList);
        return (
            <>
            <h1>courseList</h1>
            <table className = {"table"}>
                <thead>
                    <tr>
                        <th>Sr No.</th>
                        <th>CourseName</th>
                        <th>CourseFee</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.courseList.map((course,index) => {
                        return (
                            <tr key={index}>
                                <td>{index +1}</td>
                                <td>{course.CourseName}</td>
                                <td>{course.CourseFee}</td>
                                <td>
                                    <button onClick={() => {
                                        this.props.deleteCourseByIndex(index)
                                    }} className ="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
            courseList: state.courseList,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        deleteCourseByIndex : (index) =>
        dispatch({type: "COURSE_DELETE", payload: index}),

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CourseList);