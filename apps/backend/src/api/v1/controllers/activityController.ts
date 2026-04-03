import * as service from "../services/activityService";

// CREATE activity
export const createActivity = async (req: any, res: any) => {
    const activity = await service.createActivity(req.body);
    res.json(activity);
};

// GET all activity
export const getActivity = async (req: any, res: any) => {
    const activity = await service.getActivity();
    res.json(activity);
};