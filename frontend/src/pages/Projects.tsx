import { useMemo, useState } from "react";
import { Grid, Typography, Stack } from "@mui/material";

import Container from "../components/layout/Container";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectSearch from "../components/projects/ProjectSearch";
import CategoryFilter from "../components/projects/CategoryFilter";
import ProjectSkeleton from "../components/projects/ProjectSkeleton";

import { useProjects } from "../hooks/useProjects";

function Projects() {
  const { data, isLoading, isError } = useProjects();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (!data) return [];

    return data.filter((project) => {
      const matchesSearch = project.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || project.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [data, search, category]);

  if (isLoading) {
    return (
      <Container>
        <Grid container spacing={4}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Grid
              key={item}
              size={{ xs: 12, md: 6, lg: 4 }}
            >
              <ProjectSkeleton />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <Typography variant="h5">
          Something went wrong.
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        sx={{
          mb: 4,
        }}
      >
        <ProjectSearch
          value={search}
          onChange={setSearch}
        />

        <CategoryFilter
          value={category}
          onChange={setCategory}
        />
      </Stack>

      <Grid container spacing={4}>
        {filteredProjects.map((project) => (
          <Grid
            key={project._id}
            size={{ xs: 12, md: 6, lg: 4 }}
          >
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;