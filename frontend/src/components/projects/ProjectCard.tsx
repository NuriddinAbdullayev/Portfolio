import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Stack,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

import type { Project } from "../../types/project";

interface Props {
  project: Project;
}

function ProjectCard({ project }: Props) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: ".3s",
        "&:hover": {
          transform: "translateY(-8px)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="220"
        image={project.image}
        alt={project.title}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h5"
          fontWeight={700}
        >
          {project.title}
        </Typography>

        <Chip
          label={project.category}
          sx={{ mt: 1 }}
        />

        <Typography
          sx={{ mt: 2 }}
          color="text.secondary"
        >
          {project.description}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          mt={3}
          flexWrap="wrap"
        >
          {project.technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              color="primary"
              variant="outlined"
            />
          ))}
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          mt={4}
        >
          <Button
            component={Link}
            to={`/projects/${project._id}`}
            variant="contained"
          >
            Details
          </Button>

          <Button
            href={project.github}
            target="_blank"
          >
            GitHub
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;