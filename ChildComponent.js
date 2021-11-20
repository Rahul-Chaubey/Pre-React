import React, {Component}  from "react";

export default class SmChildComponents extends Component {

    render () {
        const {name, onProfit} = this.props // destructuring
        return <> 
        <h1>{name}</h1>
        <button onClick={onProfit}>Profit</button>
         </>
    }
}