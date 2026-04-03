import { prisma } from "../db/prisma";

export const createUserDB = (data: any) => {
  return prisma.user.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      category: data.category,
      createdAt: data.createdAt,
    },
  });
};

export const getUsersDB = () => {
  return prisma.user.findMany({
    include: {
      readings: true,
      favourites: true,
    },
  });
};

export const getUserByIdDB = (id: string) => {
  return prisma.user.findUnique({
    where: { id },
    include: {
      readings: true,
      favourites: true,
    },
  });
};

export const updateUserDB = (id: string, data: any) => {
  return prisma.user.update({
    where: { id },
    data,
  });
};

export const deleteUserDB = (id: string) => {
  return prisma.user.delete({
    where: { id },
  });
};

export const addReadingDB = (userId: string, bookId: string) => {
  return prisma.reading.create({
    data: {
      userId,
      bookId,
    },
  });
};

export const addFavouriteDB = (userId: string, bookId: string) => {
  return prisma.favourite.create({
    data: {
      userId,
      bookId,
    },
  });
};

export const getUserWithRelations = (userId: string) => {
  return prisma.user.findUnique({
    where: { id: userId },
    include: {
      readings: true,
      favourites: true,
    },
  });
};
