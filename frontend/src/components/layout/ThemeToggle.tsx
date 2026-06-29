import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { IconButton } from "@mui/material";

import { toggleTheme } from "../../redux/slices/themeSlice";

import { useAppDispatch } from "../../hooks/useRedux";
import { useAppSelector } from "../../hooks/useRedux";

function ThemeToggle() {
  const dispatch = useAppDispatch();

  const mode = useAppSelector((state) => state.theme.mode);

  return (
    <IconButton
      onClick={() => dispatch(toggleTheme())}
      color="inherit"
    >
      {mode === "light" ? (
        <DarkModeIcon />
      ) : (
        <LightModeIcon />
      )}
    </IconButton>
  );
}

export default ThemeToggle;