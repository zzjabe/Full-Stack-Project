import express, { Express } from "express";
import userRoutes from "./api/v1/routes/userRoutes";

import activityRoutes from "./api/v1/routes/activityRoutes";

import bookRoutes from "./api/v1/routes/bookRoutes";

import cors from "cors";

// Initialize Express application
const app: Express = express();

app.use(cors());

app.use(express.json());

app.use("/", userRoutes);

app.use("/api/v1", activityRoutes);

app.use("/api/books", bookRoutes);

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

export default app;
