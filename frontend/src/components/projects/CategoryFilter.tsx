import { MenuItem, TextField } from "@mui/material";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Full Stack",
  "Mobile",
];

function CategoryFilter({ value, onChange }: Props) {
  return (
    <TextField
      select
      label="Category"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      sx={{
        minWidth: 180,
      }}
    >
      {categories.map((category) => (
        <MenuItem
          key={category}
          value={category}
        >
          {category}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default CategoryFilter;