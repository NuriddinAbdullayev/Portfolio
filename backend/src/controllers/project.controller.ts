import { Request, Response } from "express";
import { validationResult } from "express-validator";

import Project from "../models/Project";
import { asyncHandler } from "../utils/asyncHandler";

export const getProjects = asyncHandler(async (req: Request, res: Response) => {
    const projects = await Project.find();

    res.status(200).json(projects);
});

export const getProjectById = asyncHandler(async (req: Request, res: Response) => {

    const project = await Project.findById(req.params.id);

    if (!project) {
        res.status(404).json({
            message: "Project not found",
        });
        return;
    }

    res.json(project);
});

export const createProject = asyncHandler(async (req: Request, res: Response) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400).json(errors.array());
        return;
    }

    const project = await Project.create(req.body);

    res.status(201).json(project);
});

export const updateProject = asyncHandler(async (req: Request, res: Response) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400).json(errors.array());
        return;
    }

    const project = await Project.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        }
    );

    if (!project) {
        res.status(404).json({
            message: "Project not found",
        });
        return;
    }

    res.json(project);
});

export const deleteProject = asyncHandler(async (req: Request, res: Response) => {

    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
        res.status(404).json({
            message: "Project not found",
        });
        return;
    }

    res.json({
        message: "Project deleted successfully",
    });
});