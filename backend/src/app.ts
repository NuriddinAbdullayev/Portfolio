import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

import projectRoutes from "./routes/project.routes";
import { errorHandler } from "./middleware/error.middleware";

dotenv.config();

const app = express();

app.use(cors());

app.use(morgan("dev"));

app.use(express.json());

app.use("/projects", projectRoutes);

app.use((req, res) => {
    res.status(404).json({
        message: "Route not found",
    });
});

app.use(errorHandler);

export default app;