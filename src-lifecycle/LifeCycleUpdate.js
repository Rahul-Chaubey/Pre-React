import React, {Component} from "react";
import LifeCycleUnmount from "./LifeCycleUnmount";


export default class LifeCycleUpdate extends Component {
    state = {
        showtext: true,
    };

    onClickHandler = () => {
        this.setState({showtext: !this.state.showtext});
    };

    render() {
        console.log("In Render");
        return (
            <>
            {this.state.showtext && 
            (
            <>
            <h1>In LifeCycleUpdate</h1>
            <LifeCycleUnmount/>
            </>
            )}
            <button onClick = {this.onClickHandler}>Toggle</button>
            </>
        );
    }
    componentDidUpdate() {
        console.log("In componentDidUpdate")
    }
}