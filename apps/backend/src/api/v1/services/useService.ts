import * as repo from "../repositories/userRepo";
import { prisma } from "../db/prisma";

export function mapUser(user: any) {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    createdAt: user.createdAt,
    category: user.category,
    readingList: user.readings?.map((r: any) => r.bookId) || [],
    favouriteList: user.favourites?.map((f: any) => f.bookId) || [],
  };
}

export const createUser = async (data: any) => {
  const user = await repo.createUserDB(data);

  return {
    ...user,
    readingList: [],
    favouriteList: [],
  };
};

export const getUsers = async () => {
  const users = await repo.getUsersDB();
  return users.map(mapUser);
};

export const getUserById = async (id: string) => {
  const user = await repo.getUserByIdDB(id);

  if (!user) return null;

  return mapUser(user);
};

export const updateUser = async (id: string, data: any) => {
  const user = await repo.updateUserDB(id, data);

  return {
    ...user,
    readingList: [],
    favouriteList: [],
  };
};

export const deleteUser = async (id: string) => {
  return repo.deleteUserDB(id);
};

export const addReading = async (userId: string, bookId: string) => {
  const user = await repo.getUserWithRelations(userId);

  if (!user) throw new Error("User not found");

  const exists = user.readings.some((r) => r.bookId === bookId);

  if (!exists) {
    await repo.addReadingDB(userId, bookId);
  }

  const updatedUser = await repo.getUserWithRelations(userId);

  if (!updatedUser) throw new Error("User not found");

  return mapUser(updatedUser);
};

export const addFavourite = async (userId: string, bookId: string) => {
  const user = await repo.getUserWithRelations(userId);

  if (!user) throw new Error("User not found");

  const exists = user.favourites.some((f) => f.bookId === bookId);

  if (!exists) {
    await repo.addFavouriteDB(userId, bookId);
  }

  const updatedUser = await repo.getUserWithRelations(userId);

  if (!updatedUser) throw new Error("User not found");

  return mapUser(updatedUser);
};

export const removeReading = async (userId: string, bookId: string) => {
  const user = await repo.getUserWithRelations(userId);
  if (!user) throw new Error("User not found");

  const existing = user.readings.find((r) => r.bookId === bookId);
  if (!existing) {
    throw new Error("Reading not found");
  }

  await prisma.reading.delete({
    where: { id: existing.id },
  });

  const updatedUser = await repo.getUserWithRelations(userId);
  return mapUser(updatedUser);
};

export const removeFavourite = async (userId: string, bookId: string) => {
  const user = await repo.getUserWithRelations(userId);
  if (!user) throw new Error("User not found");

  const existing = user.favourites.find((f) => f.bookId === bookId);
  if (!existing) {
    throw new Error("Favourite not found");
  }

  await prisma.favourite.delete({
    where: { id: existing.id },
  });

  const updatedUser = await repo.getUserWithRelations(userId);
  return mapUser(updatedUser);
};
