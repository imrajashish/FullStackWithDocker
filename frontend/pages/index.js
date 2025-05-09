import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <Link href="/user/add">Add User</Link>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <Link href={`/user/${user._id}`}>{user.user}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
