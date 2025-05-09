import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function AddUser() {
  const [formData, setFormData] = useState({
    user: "",
    interest: "",
    age: "",
    mobile: "",
    email: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      interest: formData.interest.split(",").map((item) => item.trim()),
    };
    try {
      await axios.post("http://localhost:5000/api/users", payload);
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="user"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          name="interest"
          placeholder="Interest (comma-separated)"
          onChange={handleChange}
          required
        />
        <input
          name="age"
          type="number"
          placeholder="Age"
          onChange={handleChange}
          required
        />
        <input
          name="mobile"
          placeholder="Mobile"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
