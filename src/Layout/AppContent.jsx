import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { colors } from "../Theme/Colors.styles";

function AppContent() {
  return (
    <Box bgcolor={colors.layout.background}>
      <Outlet />
    </Box>
  );
}

export default AppContent;
