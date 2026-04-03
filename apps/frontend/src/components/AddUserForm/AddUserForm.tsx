import { useState } from "react";
import type { User } from "../../../../../shared/types/user";
import "./AddUserForm.css";

type AddUserFormProps = {
  addUser: (
    data: Omit<User, "id" | "readingList" | "favouriteList">,
  ) => Promise<void>;
};

function AddUserForm({ addUser }: AddUserFormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [category, setCategory] = useState<"Normal" | "Platinum">("Normal");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (firstName.trim().length < 2) {
      setError("First name must be at least 2 characters");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await addUser({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        category,
        createdAt: new Date().toISOString(),
      });

      // reset
      setFirstName("");
      setLastName("");
      setCategory("Normal");
    } catch (err) {
      console.error(err);
      setError("Failed to add user");
    } finally {
      setLoading(false);
    }
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
          disabled={loading}
        />
      </div>

      <div className="form-group">
        <label>Last Name:</label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          disabled={loading}
        />
      </div>

      <div className="form-group">
        <label>Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as "Normal" | "Platinum")}
          disabled={loading}
        >
          <option value="Normal">Normal</option>
          <option value="Platinum">Platinum</option>
        </select>
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add User"}
      </button>
    </form>
  );
}

export default AddUserForm;
