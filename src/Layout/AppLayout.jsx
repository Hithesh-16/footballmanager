import { Box } from "@mui/material";
import React from "react";
import AppSidebar from "./AppSidebar";
import AppContent from "./AppContent";

function AppLayout() {
  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <AppSidebar />
      <AppContent />
    </Box>
  );
}

export default AppLayout;
