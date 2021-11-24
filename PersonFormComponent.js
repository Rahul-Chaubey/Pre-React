import React, {Component} from "react";


export default class PersonFormComponent extends Component {
    state = {
     PersonList : [],
     name : "",
     age : 0,
     mobileNumber :0,
 };

    onValueChangehandler=(event)=>{
        console.log(event.target.name);
       this.setState({[event.target.name]: event.target.value});
};

   onSubmitChangeHandler=(event)=>{
      event.preventDefault();
      console.log("In onSubmit");     
      console.log(this.state);
};

   onSubmit=()=>{
    const PersonListCopy = this.state.PersonList;
    PersonListCopy.push(
        <h3>
            Hello, My name is {this.state.name},and I'm{this.state.age} years old, Here is my Contact number{this.state.mobileNumber}
        </h3>
       );
    this.setState({PersonList:PersonListCopy, name:"",age:0,mobileNumber:0});
};
    render () {
        return (
            <>
                <h1>Person Form</h1>
                <form onSubmit={this.onSubmitChangeHandler}>
                     
                <hr/>
                    <label>Name</label>
                    <input 
                    name={"name"}
                    value={this.state.name}
                    onChange= {this.onValueChangehandler}/>
                    <br />
                    <br/>
                    

                    <label>Age</label>
                    <input 
                    name = {"age"}
                    value={this.state.age} 
                    onChange={this.onValueChangehandler}/>
                    <br />
                    <br/>
                    

                    <label>mobileNumber</label>
                    <input
                    name = {"mobileNumber"}
                    value={this.state.mobileNumber}
                    onChange = {this.onValueChangehandler}></input>
                    <br/>
                    <br/>
                    <hr/>
                    
                    <button type={"submit"} onClick={this.onSubmit}>submit</button>
                   { this.state.PersonList.map((element, index) => (
                <div key={index}>
                    <div>{element}</div>
                </div> ))  }
                
                </form>
                </>
        );
    }
}
