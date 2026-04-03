import { Router } from "express";
import * as activityController from "../controllers/activityController";

const router = Router();

//Get all of the activity
router.get("/activity", activityController.getActivity);

// CREATE activity
router.post("/activity", activityController.createActivity);

export default router;