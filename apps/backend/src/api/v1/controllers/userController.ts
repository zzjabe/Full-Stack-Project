import * as service from "../services/useService";

export const createUser = async (req: any, res: any) => {
  const user = await service.createUser(req.body);
  res.json(user);
};

export const getUsers = async (req: any, res: any) => {
  const users = await service.getUsers();
  res.json(users);
};

export const getUserById = async (req: any, res: any) => {
  const user = await service.getUserById(req.params.id);
  res.json(user);
};

export const updateUser = async (req: any, res: any) => {
  const user = await service.updateUser(req.params.id, req.body);
  res.json(user);
};

export const deleteUser = async (req: any, res: any) => {
  await service.deleteUser(req.params.id);
  res.json({ message: "deleted" });
};

export const addReading = async (req: any, res: any) => {
  try {
    const { bookId } = req.body;
    const user = await service.addReading(req.params.id, bookId);
    res.json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const addFavourite = async (req: any, res: any) => {
  try {
    const { bookId } = req.body;
    const user = await service.addFavourite(req.params.id, bookId);
    res.json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const removeReading = async (req: any, res: any) => {
  try {
    const { id, bookId } = req.params;

    if (!id || !bookId) {
      return res.status(400).json({ error: "userId and bookId are required" });
    }

    const updatedUser = await service.removeReading(id, bookId);
    res.json(updatedUser);
  } catch (err: any) {
    res.status(404).json({ error: err.message });
  }
};

export const removeFavourite = async (req: any, res: any) => {
  try {
    const { id, bookId } = req.params;

    if (!id || !bookId) {
      return res.status(400).json({ error: "userId and bookId are required" });
    }

    const updatedUser = await service.removeFavourite(id, bookId);
    res.json(updatedUser);
  } catch (err: any) {
    res.status(404).json({ error: err.message });
  }
};
