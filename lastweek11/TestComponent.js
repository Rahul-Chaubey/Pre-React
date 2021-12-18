var createReactClass = require("create-react-class");

// import React, {Component} from "react";

// class TestComponent extends Component {
//     render() {
//         return <h1>In TestComponent</h1>;
//     }
// }

var TestComponent = createReactClass({
  render: function () {
    return (
      <>
        {" "}
        <h1>In TestComponent with Old Way: {this.props.name}</h1>
        Count: {this.state.count}
        <br />
        <button onClick={this.onIncrementClickHandler}>Increment</button>
        <button onClick={this.onDecrementClickHandler}>Decrement</button>
      </>
    );
  },
  getInitialState: function () {
    return {
      count: 0,
    };
  },

  onIncrementClickHandler: function () {
    this.setState({ count: this.state.count + 1 });
  },

  onDecrementClickHandler: function () {
    this.setState({ count: this.state.count - 1 });
  },
});

export default TestComponent;
