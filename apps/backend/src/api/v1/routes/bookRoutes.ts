import { Router } from "express";
import {
  getBooks,
  addBook,
  editBook,
  removeBook,
} from "../controllers/bookController";


const router = Router();

router.get("/", getBooks);
router.post("/", addBook);
router.put("/:id", editBook);
router.delete("/:id", removeBook);

export default router;