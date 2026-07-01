import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";

import Container from "../components/layout/Container";
import { useProject } from "../hooks/useProject";

function ProjectDetails() {
  const { id } = useParams();

  const { data, isLoading, isError } = useProject(id || "");

  if (isLoading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  if (isError || !data) {
    return (
      <Container>
        <Typography variant="h4">
          Project not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Stack spacing={4}>
        <Box
          component="img"
          src={data.image}
          alt={data.title}
          sx={{
            width: "100%",
            borderRadius: 3,
            maxHeight: 500,
            objectFit: "cover",
          }}
        />

        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
          }}
        >
          {data.title}
        </Typography>

        <Chip
          label={data.category}
          sx={{
            width: "fit-content",
          }}
        />

        <Typography variant="h6">
          {data.description}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          sx={{
            flexWrap: "wrap",
          }}
        >
          {data.technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              color="primary"
            />
          ))}
        </Stack>

        <Stack
          direction="row"
          spacing={2}
        >
          <Button
            variant="contained"
            href={data.github}
            target="_blank"
          >
            GitHub
          </Button>

          {/* <Button
            variant="outlined"
            href={data.demo}
            target="_blank"
          >
            Live Demo
          </Button> */}
        </Stack>
      </Stack>
    </Container>
  );
}

export default ProjectDetails;