import React, { useEffect, useState } from "react";
import axios from "axios";

import requireAuth from "../requireAuth";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(e => {
    const endpoint = "/users";

    axios
      .get(endpoint)
      .then(res => {
        setUsers(res.data);
      })
      .catch(error => {
        console.log(`users: `, error);
      });
  }, []);

  return (
    <>
      <h2>Existing Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.id} - {user.username}
          </li>
        ))}
      </ul>
    </>
  );
};

export default requireAuth(Users);
