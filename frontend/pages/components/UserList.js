import Link from "next/link";

export default function UserList({ users }) {
  if (!users || users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user._id}>
          <Link href={`/user/${user._id}`}>
            {user.user} — {user.email}
          </Link>
        </li>
      ))}
    </ul>
  );
}
