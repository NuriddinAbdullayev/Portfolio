import { RouterProvider } from "react-router-dom";

import { ThemeProvider, CssBaseline } from "@mui/material";

import { useSelector } from "react-redux";

import type { RootState } from "./redux/store";

import { darkTheme, lightTheme } from "./theme/theme";

import router from "./routes/router";

function App() {
  const mode = useSelector((state: RootState) => state.theme.mode);

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <CssBaseline />

      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;