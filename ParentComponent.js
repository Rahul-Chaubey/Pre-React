import React, {Component} from "react";
import ChildComponent from "./ChildComponent";



export default class ParentComponent extends Component {

    state = {
        balance : 0,
    }

    onProfit = () => {
        this.setState({balance : this.state.balance +1})
    }

    onExpense = () => {
        if(this.state.balance === 0) {
            return;
        }
        this.setState({balance: this.state.balance -1})
    }

    render() {
        return <> <h1>Parent :{this.state.balance}</h1>   
        <button onClick={this.onProfit} >Family Profit</button>
        <button onClick={this.onExpense}>Family Expense</button>

        <ChildComponent name = {"Rahul"} onProfit={this.onProfit} onExpense={this.onExpense}/>
        
        <ChildComponent name = {"Varun"} onProfit={this.onProfit} onExpense={this.onExpense} />
        </>
          
         
         
    }
}