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
    body("title")
    .notEmpty()
    .withMessage("Title is required"),
    body("description")
    .notEmpty()
    .withMessage("Description is required"),
    body("image")
    .notEmpty()
    .withMessage("Image is required"),
    body("github")
    .notEmpty()
    .withMessage("Github is required"),
    body("demo")
    .notEmpty()
    .withMessage("Demo is required"),
    body("category")
    .notEmpty()
    .withMessage("Category is required"),
];

router.get("/", getProjects);

router.get("/:id", getProjectById);

router.post("/", projectValidation, createProject);

router.put("/:id", projectValidation, updateProject);

router.delete("/:id", deleteProject);

export default router;