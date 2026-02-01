import { useState } from "react";
import type { User } from "../../data/users";
import { v4 as uuidv4 } from "uuid";
import "./AddUserForm.css";

interface AddUserFormProps {
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

function AddUserForm({ setUsers }: AddUserFormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [category, setCategory] = useState<"Normal" | "Platinum">("Normal");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (firstName.trim().length < 2) {
      setError("First name must be at least 2 characters");
      return;
    }

    const newUser: User = {
      id: uuidv4(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      category,
      createdAt: new Date().toISOString(),
      readingList: [],
      favouriteList: [],
    };

    setUsers((prev) => [newUser, ...prev]);

    setFirstName("");
    setLastName("");
    setCategory("Normal");
    setError("");
  }

  return (
    <form className="add-user-form" onSubmit={handleSubmit}>
      <h2>Add New User</h2>

      {error && <div className="error-message">{error}</div>}

      <div className="form-group">
        <label>First Name:</label>
        <input
          placeholder="Min 2 chars"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Last Name:</label>
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as "Normal" | "Platinum")}
        >
          <option value="Normal">Normal</option>
          <option value="Platinum">Platinum</option>
        </select>
      </div>

      <button type="submit" className="submit-button">
        Add User
      </button>
    </form>
  );
}

export default AddUserForm;
