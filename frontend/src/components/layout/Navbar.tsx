import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar() {
  const { t } = useTranslation();

  return (
    <AppBar position="sticky" elevation={0} color="transparent">
      <Toolbar
        sx={{
          maxWidth: 1200,
          width: "100%",
          mx: "auto",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            flexGrow: 1,
          }}
        >
          Portfolio
        </Typography>

          <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
          >
            <Button component={Link} to="/">
              {t("home")}
            </Button>

            <Button component={Link} to="/about">
              {t("about")}
            </Button>

            <Button component={Link} to="/skills">
              {t("skills")}
            </Button>

            <Button component={Link} to="/projects">
              {t("projects")}
            </Button>

            <Button component={Link} to="/contact">
              {t("contact")}
            </Button>

            <LanguageSwitcher />

            <ThemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;