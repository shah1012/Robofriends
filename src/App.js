import React, { Component } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import Add from "./components/Add";
import "./css/App.css";
import AddForm from "./components/AddForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
      model: false,
    };
  }
  //runs when App component gets loaded
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };

  addRobot = (e, name, email, clearInputs) => {
    e.preventDefault();
    this.setState({
      robots: [
        ...this.state.robots,
        {
          id: Math.floor(Math.random() * 10) + 1,
          name: `${name}`,
          username: `${name}`,
          email: `${email}`,
        },
      ],
    });

    clearInputs();
  };

  // Toggle to open/close the Add Model
  toggleModel = () => {
    this.setState({
      model: !this.state.model,
    });
  };

  render() {
    const { robots, searchField, model } = this.state;

    const filterRobots = robots.filter((robot) => {
      return robot.name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });

    // does a loading thing before all robots are fetched

    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Add toggleFunc={this.toggleModel} />

        {/* Adding Robot Form */}
        <AddForm toggleState={model} addFunc={this.addRobot} />

        <Scroll>
          <CardList robots={filterRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
