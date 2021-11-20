import React, {Component}  from "react";
import SmChildComponents from "./ChildComponent";

export default class SmParentComponents extends Component {

    state = {
            balance: 0,
    }

    onProfit = () => {  //Handler
        this.setState({balance : this.state.balance +1})
    }
    render () {
        return <> <h1>Parent :{this.state.balance}</h1>   
        <button onClick={this.onProfit} >Family Profit</button>

        <SmChildComponents name = {"Rahul"} onProfit= {this.onProfit}/>

        <SmChildComponents name = {"Varun"} onProfit= {this.onProfit}/>

          
        </>
    }
}