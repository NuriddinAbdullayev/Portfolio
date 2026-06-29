import mongoose, { Schema } from "mongoose";
import { IProject } from "../types/project.interface";

const projectSchema = new Schema<IProject>(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
        },

        image: {
            type: String,
            required: true,
        },

        technologies: {
            type: [String],
            required: true,
        },

        github: {
            type: String,
            required: true,
        },

        demo: {
            type: String,
            required: true,
        },

        category: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model<IProject>("Project", projectSchema);