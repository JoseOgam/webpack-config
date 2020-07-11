import React from "react";
import ReactDOM from "react-dom";
class Web extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

ReactDOM.render(<Web />, document.getElementById("app"));
