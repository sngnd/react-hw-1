import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  handleClick = (event) => {
    const type = event.target.textContent;
    switch (type) {
      case "+":
        this.setState({
          index: ++this.state.index,
        });
        break;
      case "Reset":
        this.setState({
          index: 0,
        });
        break;
      case "-":
        this.setState({
          index: this.state.index === 0 ? this.state.index : --this.state.index,
        });
    }
  };

  render() {
    return (
      <div>
        <p>{this.state.index}</p>
        <button onClick={this.handleClick}>+</button>
        <button onClick={this.handleClick}>Reset</button>
        <button onClick={this.handleClick}>-</button>
      </div>
    );
  }
}

export default App;
