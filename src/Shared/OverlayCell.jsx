/* eslint-disable react/react-in-jsx-scope */
import { Box, Tooltip, colors } from "@mui/material";

const OverlayCell = ({ hideOverlay, overlayContent, children, color = colors.common.white }) => {
  if (hideOverlay) return children;
  return (
    <Tooltip title={overlayContent || children} placement='bottom'>
      <Box
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          lineClamp: 1,
          WebkitLineClamp: 1,
          WebkitBoxOrient: "vertical",
          color
        }}
      >
        {children}
      </Box>
    </Tooltip>
  );
};

export { OverlayCell };
