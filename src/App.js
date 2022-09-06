import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm/>
      </div>
    );
  }
}

export default App;
