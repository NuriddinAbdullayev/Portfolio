import { TextField } from "@mui/material";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

function ProjectSearch({ value, onChange }: Props) {
  return (
    <TextField
      fullWidth
      label="Search Projects"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      sx={{ mb: 3 }}
    />
  );
}

export default ProjectSearch;