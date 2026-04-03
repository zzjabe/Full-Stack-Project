import { useEffect, useState } from "react";
import { userService } from "../services/userService";
import type { User } from "../../../../shared/types/user";

const BASE_URL = import.meta.env.VITE_API_URL;

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [currentUserId] = useState("U1");

  async function refresh() {
    try {
      const data = await userService.getUsers();
      setUsers(data || []);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  async function addUser(
    data: Omit<User, "id" | "readingList" | "favouriteList">,
  ) {
    try {
      await userService.addUser(data);
      await refresh();
    } catch (err) {
      console.error("Failed to add user:", err);
    }
  }

  async function deleteUser(id: string) {
    try {
      await userService.deleteUser(id);
      await refresh();
    } catch (err) {
      console.error("Failed to delete user:", err);
    }
  }

  async function addToReading(userId: string, bookId: string) {
    try {
      const res = await fetch(`${BASE_URL}/users/${userId}/readings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bookId }),
      });

      if (!res.ok) throw new Error("Failed to add to reading");

      await refresh();
    } catch (error) {
      console.error("Failed to add to reading:", error);
    }
  }

  async function addToFavourite(userId: string, bookId: string) {
    try {
      const res = await fetch(`${BASE_URL}/users/${userId}/favourites`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bookId }),
      });

      if (!res.ok) throw new Error("Failed to add to favourite");

      await refresh();
    } catch (error) {
      console.error("Failed to add to favourite:", error);
    }
  }

  const removeFromReading = async (userId: string, bookId: string) => {
    try {
      const res = await fetch(
        `${BASE_URL}/users/${userId}/readings/${bookId}`,
        {
          method: "DELETE",
        },
      );

      if (!res.ok) throw new Error("Failed to remove book");

      await refresh();
    } catch (err) {
      console.error("Error removing book:", err);
      alert("Error removing book");
    }
  };

  const removeFromFavourite = async (userId: string, bookId: string) => {
    try {
      const res = await fetch(
        `${BASE_URL}/users/${userId}/favourites/${bookId}`,
        {
          method: "DELETE",
        },
      );

      if (!res.ok) throw new Error("Failed to remove favourite");

      await refresh();
    } catch (err) {
      console.error("Error removing favourite:", err);
      alert("Error removing favourite");
    }
  };

  return {
    users,
    currentUserId,

    addUser,
    deleteUser,

    addToReading,
    addToFavourite,

    removeFromReading,
    removeFromFavourite,

    refresh,
  };
}
