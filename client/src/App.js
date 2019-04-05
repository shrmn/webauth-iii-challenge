import React from "react";
import { Route, NavLink } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import Users from "./components/Users";

const App = () => {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        &nbsp;|&nbsp;
        <NavLink to="/login">Login</NavLink>
        &nbsp;|&nbsp;
        <NavLink to="/users">Users</NavLink>
      </header>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/users" component={Users} />
    </>
  );
};

const Home = () => {
  return <h1>What a day! What a lovely day!</h1>;
};

const Logout = () => {
  localStorage.removeItem("token");
};

export default App;
