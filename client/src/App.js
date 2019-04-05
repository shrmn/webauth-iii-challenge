import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </div>
  );
};

const Home = () => {
  return <h1>What a day! What a lovely day!</h1>;
};

export default App;
