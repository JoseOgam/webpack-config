import React from "react";
import ReactDOM from "react-dom";
class Web extends React.Component {
  constructor(props) {
    super(props);
    this.handleClearList = this.handleClearList.bind(this);
    this.handleAddNumber = this.handleAddNumber.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      numbers: ["1", "2", "3"],
    };
  }
  handlePick() {
    var randomPick = Math.floor(Math.random() * this.state.numbers.length);
    var pick = this.state.numbers[randomPick];
    alert(pick);
  }
  handleDelete(numberToRemove) {
    this.setState((prevState) => {
      return {
        numbers: prevState.numbers.filter(
          (number) => numberToRemove !== number
        ),
      };
    });
  }
  handleAddNumber(number) {
    if (!number) {
      return "key in something";
    } else if (this.state.numbers.indexOf(number) > -1) {
      return "the value you keyed exist";
    }
    this.setState((prevState) => {
      return {
        numbers: prevState.numbers.concat(number),
      };
    });
  }
  handleClearList() {
    return this.setState(() => ({
      numbers: [],
    }));
  }
  render() {
    var title = "Hello React";
    var subtitle = "will do React everyday";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          pick={this.handlePick}
          hasNumbers={this.state.numbers.length > 0}
        />
        <List
          numbers={this.state.numbers}
          clearList={this.handleClearList}
          deleteNum={this.handleDelete}
        />
        <AddNumber addNumber={this.handleAddNumber} />
      </div>
    );
  }
}
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
    </div>
  );
};
const Action = (props) => {
  return (
    <div>
      <button onClick={props.pick} disabled={!props.hasNumbers}>
        pick random
      </button>
    </div>
  );
};
const List = (props) => {
  return (
    <div>
      <button onClick={props.clearList}>clearList</button>
      {props.numbers.map((number) => (
        <Numbers key={number} numberList={number} clearNum={props.deleteNum} />
      ))}
    </div>
  );
};
const Numbers = (props) => {
  return (
    <div>
      <li>
        {props.numberList}
        <button
          onClick={(e) => {
            props.clearNum(props.numberList);
          }}
        >
          clear
        </button>
      </li>
    </div>
  );
};
class AddNumber extends React.Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.state = {
      error: undefined,
    };
  }
  add(e) {
    e.preventDefault();
    var number = e.target.elements.number.value.trim();
    var errorData = this.props.addNumber(number);

    this.setState(() => {
      return { error: errorData };
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.add}>
          <input type="text" name="number" />
          <button>add number</button>
        </form>
      </div>
    );
  }
}
ReactDOM.render(<Web />, document.getElementById("app"));
