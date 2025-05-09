// pages/user/edit/[id].js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditUser() {
  const router = useRouter();
  const { id } = router.query;
  const [form, setForm] = useState({
    user: "",
    age: "",
    email: "",
    mobile: "",
    interest: "",
  });

  useEffect(() => {
    if (id) {
      fetch(`/api/users/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setForm({
            user: data.user,
            age: data.age,
            email: data.email,
            mobile: data.mobile,
            interest: data.interest.join(", "),
          });
        });
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      age: parseInt(form.age),
      mobile: Number(form.mobile),
      interest: form.interest.split(",").map((item) => item.trim()),
    };

    const res = await fetch(`/api/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      router.push(`/user/${id}`);
    } else {
      alert("Update failed");
    }
  };

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="user"
            value={form.user}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Mobile:
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Interests (comma separated):
          <input
            name="interest"
            value={form.interest}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}
