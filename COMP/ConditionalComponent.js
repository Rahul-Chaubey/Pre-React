import React, {Component} from "react";

export default class ConditionalComponent extends Component {
    state = {
        showtext : true,
    }

    onToggleShowText = () => {
        this.setState({showtext :! this.state.showtext})
    }

    render() {
        return (
            <>
            {this.state.showtext && <h1>ConditionalComponent</h1>}
            <button onClick={this.onToggleShowText}>{this.state.showtext ? "Hide" : "Show"}</button>
            </>
        )
    }
}