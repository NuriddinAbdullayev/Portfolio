import { Typography } from "@mui/material";

interface Props {
  title: string;
  subtitle?: string;
}

function SectionTitle({ title, subtitle }: Props) {
  return (
    <>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: 700,
        }}
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography
          color="text.secondary"
          sx={{
            mb: 5,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </>
  );
}

export default SectionTitle;