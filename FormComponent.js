import React, {Component} from "react";


export default class  FormComponent extends Component {
    state = {
        firstname : "",
        age : 0,
    };

  onValueChangeHandler = (event) => {
      console.log(event.target.name);
      this.setState({[event.target.name] : event.target.value});
  };

//   onAgeChangeHandler = (event) => {
//     this.setState({age : event.target.value});
// };

omFormSubmitHandler = (event) => {
    event.preventDefault();
    console.log("In onSubmit");
    console.log(this.state);
};

    render () {
        return (
            <>
                <h1>Person Form</h1>
                <form onSubmit={this.omFormSubmitHandler}>
                    <label>Name</label>
                    <input 
                    name={"firstname"}
                    value={this.state.firstname}
                    onChange= {this.onValueChangeHandler}/>
                    <br />
                    <label>Age:</label>
                    <input 
                    name = {"age"}
                    value={this.state.age} 
                    onChange={this.onValueChangeHandler}/>
                    <br />
                    <button type="submit">submit</button>
                </form>
                </>
        );
    }
}