// import React, {Component} from "react";

// export default class ListComponent extends Component {
//     render () {
//         const myList = ["Ankur" , "Abhay", "Tarun", "Varun", "Ajay"];
//         return (
//             <>
//             <h1>From ListComponent</h1>
//             {myList.map((element, index) => (
//                 <div key={index}>
//                     <h2>Inside the List</h2>
//                     <div>{element}</div>
//                 </div> )
//             )}
//             </>
//         );
//     }
// }


import React, {Component} from "react";

export default class ListComponent extends Component {
    state = {
        myList : [],
        inputValue: "",
    };

    onAdd = () => {
        console.log("On Add");
        const myListCopy = this.state.myList;
        myListCopy.push(this.state.inputValue);
        this.setState({myList : myListCopy, inputValue: ""});
    };

    onInputTextChange = (event) => {
        console.log(event.target.value);
        this.setState({inputValue: event.target.value});
    };

    render() {
        return(
            <>
            <h1>My ToDo List</h1>
            <input 
             value = {this.state.inputValue}
             onChange= {this.onInputTextChange}
             />
            <button onClick={this.onAdd}>Add</button>
            {this.state.myList.map((element, index) => (
                <div key={index}>
                    <div>{element}</div>
                </div> )
            )}
            </>
        )
    }
}