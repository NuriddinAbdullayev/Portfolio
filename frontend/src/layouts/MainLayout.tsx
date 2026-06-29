import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

function MainLayout() {
  return (
   <>
    <ScrollToTop />

    <Navbar />

    <Box component="main" sx={{ minHeight: "80vh" }}>
      <Outlet />
    </Box>

    <Footer />
  </>
  );
}

export default MainLayout;