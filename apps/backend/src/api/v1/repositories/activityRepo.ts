import { prisma } from "../db/prisma";

// CREATE activity
export const createActivityDB = (data: any) => {
  return prisma.activity.create({
    data,
  });
};

// GET all activity
export const getActivityDB = () => {
  return prisma.activity.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};