const BASE_URL = import.meta.env.VITE_API_URL;

export const userService = {
  async getUsers() {
    const res = await fetch(`${BASE_URL}/users`);
    return res.json();
  },

  async addUser(data: any) {
    const res = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return res.json();
  },

  async deleteUser(id: string) {
    await fetch(`${BASE_URL}/users/${id}`, {
      method: "DELETE",
    });
  },

  async updateUser(id: string, data: any) {
    const res = await fetch(`${BASE_URL}/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return res.json();
  },
};
