import React from "react";
import ReactDOM from "react-dom";
class Web extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  }
  render() {
    return (
      <div>
        <List />
      </div>
    );
  }
}
const List = () => {
  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
};

ReactDOM.render(<Web />, document.getElementById("app"));
