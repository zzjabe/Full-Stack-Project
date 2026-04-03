import { Router } from "express";
import * as userController from "../controllers/userController";

const router = Router();

router.post("/users", userController.createUser);
router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUserById);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

router.post("/users/:id/readings", userController.addReading);
router.delete("/users/:id/readings/:bookId", userController.removeReading);
router.post("/users/:id/favourites", userController.addFavourite);
router.delete("/users/:id/favourites/:bookId", userController.removeFavourite);

export default router;
