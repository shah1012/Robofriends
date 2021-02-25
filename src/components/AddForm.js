import React, { Component } from "react";
import "../css/addForm.css";

export class AddForm extends Component {
  constructor() {
    super();
    this.state = {
      nameValue: "",
      emailValue: "",
    };
  }

  clearInputs = () => {
    this.setState({
      nameValue: "",
      emailValue: "",
    });
  };

  render() {
    const { nameValue, emailValue } = this.state;
    const { toggleState, addFunc } = this.props;

    return toggleState !== false ? (
      <div>
        <form action="" className="addForm">
          <input
            type="text"
            required
            placeholder="Name of Robot"
            value={nameValue}
            onChange={(e) => this.setState({ nameValue: e.target.value })}
          />
          <input
            type="email"
            required
            placeholder="Email of Robot"
            value={emailValue}
            onChange={(e) => this.setState({ emailValue: e.target.value })}
          />
          <button
            onClick={(e) => addFunc(e, nameValue, emailValue, this.clearInputs)}
          >
            Add
          </button>
        </form>
      </div>
    ) : (
      <div></div>
    );
  }
}

export default AddForm;
