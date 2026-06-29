import { Router } from "express";
import { body } from "express-validator";

import {
    getProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
} from "../controllers/project.controller";

const router = Router();

const projectValidation = [
    body("title").notEmpty(),
    body("description").notEmpty(),
    body("image").notEmpty(),
    body("github").notEmpty(),
    body("demo").notEmpty(),
    body("category").notEmpty(),
];

router.get("/", getProjects);

router.get("/:id", getProjectById);

router.post("/", projectValidation, createProject);

router.put("/:id", projectValidation, updateProject);

router.delete("/:id", deleteProject);

export default router;