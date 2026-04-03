import { prisma } from "../db/prisma";

export const getAllBooks = () => {
  return prisma.book.findMany();
};

export const createBook = (data: any) => {
  return prisma.book.create({
    data,
  });
};

export const updateBook = (id: string, data: any) => {
  return prisma.book.update({
    where: { id },
    data,
  });
};

export const deleteBook = (id: string) => {
  return prisma.book.delete({
    where: { id },
  });
};