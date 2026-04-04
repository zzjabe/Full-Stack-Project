import type { Activity } from "../../../../shared/types/activity";

const BASE_URL = `${import.meta.env.VITE_API_URL}/api/v1`;
const ACTIVITY_ENDPOINT = "/activity";

export const activityRepo = {
  async findAll(): Promise<Activity[]> {
    const activityResponse: Response = await fetch(
      `${BASE_URL}${ACTIVITY_ENDPOINT}`,
    );

    if (!activityResponse.ok) {
      throw new Error("Failed to fetch activity");
    }

    const json: Activity[] = await activityResponse.json();
    return json;
  },

  async save(activity: Omit<Activity, "id" | "createdAt">): Promise<Activity> {
    const createResponse: Response = await fetch(
      `${BASE_URL}${ACTIVITY_ENDPOINT}`,
      {
        method: "POST",
        body: JSON.stringify(activity),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!createResponse.ok) {
      throw new Error("Failed to create activity");
    }

    const json: Activity = await createResponse.json();
    return json;
  },
};
