import React, {Component} from "react"


export default class ChildComponent extends Component {

    state = {
        balance : 0,
    }
    onChildProfit = () => {
        this.setState({balance : this.state.balance +1});
    }

    onChildExpense = () => {
        if (this.state.balance=== 0) {
            return;
        }
        this.setState({balance: this.state.balance -1});
    }

   
    render () {
          const {name, onProfit ,  onExpense} = this.props 

        const onTotalPerfectClick = () => {
              this.onChildProfit();
              onProfit();
          } 

        const onPerfectClick = () => {
            this.onChildExpense();
            onExpense();
        } 
        return <> 
        <h1>{name}:{this.state.balance}</h1>

        {/* <button onClick={onProfit}>Profit</button> */}
        <button onClick={onTotalPerfectClick}>Profit</button>
        {/* <button onClick={onExpense}>Expense</button> */}
        <button onClick={onPerfectClick}>Expense</button>
        
          </>
        
    }

}