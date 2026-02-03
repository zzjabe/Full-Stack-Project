import type { User } from "../../data/users";
import AddUserForm from "../../components/AddUserForm/AddUserForm";
import { useState } from "react";
import { Link } from "react-router-dom";
import { initialUsers } from "../../data/users";
import "./index.css";

interface AddUserFormProps {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

function UsersPage({ users, setUsers }: AddUserFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="users-page">
      <button
        className="button-a"
        onClick={() => {
          if (confirm("Reset to initial users?")) {
            localStorage.removeItem("users");
            setUsers(initialUsers);
          }
        }}
      >
        Reset Users
      </button>

      <button className="button-a" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide form" : "Add New User"}
      </button>

      {isOpen && (
        <div>
          <AddUserForm setUsers={setUsers} />
        </div>
      )}

      <div className="users-grid">
        {users.map((u) => (
          <div className="user-card" key={u.id}>
            <Link to={`/users/${u.id}`}>
              <div className="user-name link">
                {u.firstName} {u.lastName}
              </div>

              <div>id: {u.id}</div>

              <div className="user-category">{u.category}</div>

              <div className="user-date">
                Joined: {new Date(u.createdAt).toLocaleDateString()}
              </div>
            </Link>

            <button
              className="button-dele"
              onClick={() => {
                if (confirm("Delete this user?")) {
                  setUsers((prev) => prev.filter((user) => user.id !== u.id));
                }
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersPage;
