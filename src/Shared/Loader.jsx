import { Box, CircularProgress, Fade } from "@mui/material";
import React from "react";
import { colors } from "../Theme/Colors.styles";

function Loader({ style, variant, size, overlay, backgroundColor = colors.text.normal }) {
  return (
    <Fade in>
      <Box
        sx={
          overlay
            ? {
                justifyContent: "center",
                position: "absolute",
                display: "flex",
                width: "100%",
                height: "100%",
                flexDirection: "column",

                alignItems: "center",

                zIndex: 2,
                backgroundColor,
                ...style
              }
            : {}
        }
      >
        <CircularProgress variant={variant} size={size} />
      </Box>
    </Fade>
  );
}

export default Loader;
