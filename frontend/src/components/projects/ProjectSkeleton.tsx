import { Card, CardContent, Skeleton } from "@mui/material";

function ProjectSkeleton() {
  return (
    <Card
      sx={{
        height: "100%",
      }}
    >
      <Skeleton
        variant="rectangular"
        height={220}
      />

      <CardContent>
        <Skeleton
          variant="text"
          width="70%"
          height={40}
        />

        <Skeleton variant="text" />

        <Skeleton variant="text" />

        <Skeleton
          variant="text"
          width="50%"
        />

        <Skeleton
          variant="rounded"
          width={120}
          height={40}
          sx={{ mt: 3 }}
        />
      </CardContent>
    </Card>
  );
}

export default ProjectSkeleton;