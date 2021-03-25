import React, { useState, useEffect } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import Add from "./components/Add";
import "./css/App.css";
import AddForm from "./components/AddForm";

const App = () => {
  // state
  const [robots, setRobots] = useState([]);
  const [model, setModel] = useState(false);
  const [searchField, setSearchField] = useState("");

  // useEffect for fetching data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setRobots(users);
      });
  }, []);

  // functions
  const filterRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  };

  const toggleModel = () => {
    setModel(!model);
  };

  const addRobot = (e, name, email, clearInputs) => {
    if (name !== "" || email !== "") {
      e.preventDefault();
      setRobots([
        ...robots,
        {
          id: robots.length + 1,
          name: `${name}`,
          username: `${name}`,
          email: `${email}`,
        },
      ]);
      clearInputs();
    }
  };

  //rendering
  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Add toggleFunc={toggleModel} />

      {/* Adding Robot Form */}
      <AddForm toggleState={model} addFunc={addRobot} />

      <Scroll>
        <CardList robots={filterRobots} />
      </Scroll>
    </div>
  );
};
export default App;
