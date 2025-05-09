import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function UserDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/api/users/${id}`)
        .then((res) => setUser(res.data))
        .catch((err) => console.error(err));
    }
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>User Details</h2>
      <p>
        <strong>Name:</strong> {user.user}
      </p>
      <p>
        <strong>Interests:</strong> {user.interest.join(", ")}
      </p>
      <p>
        <strong>Age:</strong> {user.age}
      </p>
      <p>
        <strong>Mobile:</strong> {user.mobile}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <Link href={`/user/edit/${user._id}`}>Edit</Link>
      <br />
      <Link href="/">Back to list</Link>
    </div>
  );
}
