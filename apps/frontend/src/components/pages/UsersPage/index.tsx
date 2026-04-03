import { useState } from "react";
import { Link } from "react-router-dom";
import AddUserForm from "../../AddUserForm/AddUserForm";
import { useUsers } from "../../../hooks/useUser";
import "./index.css";

function UsersPage() {
  const { users, addUser, deleteUser } = useUsers();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="users-page">
      <button className="button-a" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide form" : "Add New User"}
      </button>

      {isOpen && (
        <div>
          <AddUserForm addUser={addUser} />
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
                if (confirm("Delete this user?")) deleteUser(u.id);
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
