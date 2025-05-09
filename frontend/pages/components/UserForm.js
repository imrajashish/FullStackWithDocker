import React, { useState, useEffect } from "react";

export default function UserForm({ initialData = {}, onSubmit }) {
  const [formData, setFormData] = useState({
    user: "",
    interest: "",
    age: "",
    mobile: "",
    email: "",
  });

  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setFormData({
        user: initialData.user || "",
        interest: initialData.interest ? initialData.interest.join(", ") : "",
        age: initialData.age || "",
        mobile: initialData.mobile || "",
        email: initialData.email || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      interest: formData.interest.split(",").map((item) => item.trim()),
    };
    onSubmit(payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="user"
        value={formData.user}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        name="interest"
        value={formData.interest}
        onChange={handleChange}
        placeholder="Interests (comma-separated)"
        required
      />
      <input
        name="age"
        type="number"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
        required
      />
      <input
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        placeholder="Mobile"
        required
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
