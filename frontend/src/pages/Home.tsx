import { Button, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Container from "../components/layout/Container";

function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Container>
      <Stack
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: "85vh",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            fontWeight={800}
          >
            {t("heroTitle")}
          </Typography>

          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mt: 2 }}
          >
            {t("heroSubtitle")}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
          }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/projects")}
          >
            {t("projects")}
          </Button>
        </motion.div>
      </Stack>
    </Container>
  );
}

export default Home;