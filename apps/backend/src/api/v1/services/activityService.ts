import * as db from "../repositories/activityRepo";

// CREATE activity
export const createActivity = async (data: any) => {
  return db.createActivityDB(data);
};

// GET all activity
export const getActivity = async () => {
  return db.getActivityDB();
};