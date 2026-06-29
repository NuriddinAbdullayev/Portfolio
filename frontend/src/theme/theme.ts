import { createTheme } from "@mui/material/styles";

const typography = {
  fontFamily: [
    "Inter",
    "system-ui",
    "sans-serif",
  ].join(","),
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2563eb",
    },
    secondary: {
      main: "#7c3aed",
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography,
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#60a5fa",
    },
    secondary: {
      main: "#a78bfa",
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography,
});