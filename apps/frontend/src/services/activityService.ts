import { activityRepo } from "../repositories/activityRepo";
import type { Activity } from "../../../../shared/types/activity";

/*
This service contains the business logic for managing activity.

It now communicates with the backend through the repo.
*/

export const activityService = {
  async getActivity(): Promise<Activity[]> {
    return activityRepo.findAll();
  },

  async addActivity(
    activity: Omit<Activity, "id" | "createdAt">,
  ): Promise<Activity> {
    return activityRepo.save(activity);
  },
};
