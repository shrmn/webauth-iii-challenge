import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const endpoint = "http://localhost:6500/api/auth/login";
    axios
      .post("http://localhost:6500/api/auth/login", { username, password })
      .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
      });
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" />
        <input
          id="username"
          onChange={e => setUsername(e.target.value)}
          placeholder="username"
          value={username}
          type="text"
        />
        <input
          id="password"
          onChange={e => setPassword(e.target.value)}
          placeholder="password"
          value={password}
          type="text"
        />
        <button>Log in</button>
      </form>
    </>
  );
};

export default Login;
