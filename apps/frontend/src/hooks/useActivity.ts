import { useEffect, useState } from "react";
import { activityService } from "../services/activityService";
import type { Activity } from "../types/activity";

/*
It calls the activityService to perform operations such as
adding and retrieving activity records.
The hook keeps logic separate from business logic.
*/

export function useActivity() {
    const [activity, setActivity] = useState<Activity[]>([]);

    async function refresh() {
        const data = await activityService.getActivity();
        setActivity(data);
    }

    async function addActivity(
        data: Omit<Activity, "id" | "createdAt">
    ) 
    {
        await activityService.addActivity(data);
        await refresh();
    }

    // load activity when page loads
    useEffect(() => {
        refresh();
    }, []);

    return {
        activity,
        addActivity,
        refresh,
    };
}