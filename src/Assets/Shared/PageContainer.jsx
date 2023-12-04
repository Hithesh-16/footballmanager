import { Box, Fade } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

function PageContainer(props) {
  return <BrowserPageContainer {...props} />;
}

PageContainer.propTypes = {
  toolbar: PropTypes.oneOf([PropTypes.element, PropTypes.string, PropTypes.any]),
  sx: PropTypes.object
};

const BrowserPageContainer = ({ children, sx, ...props }) => (
  <Fade in timeout={500}>
    <Box
      sx={{
        height: "100vh",
        padding: { xs: "10px", sm: "15px", md: "22px", lg: "40px", xl: "40px" },
        overflow: "auto",
        width: "calc(100vw - 60px)",
        ...sx
      }}
      {...props}
    >
      {children}
    </Box>
  </Fade>
);

export default React.memo(PageContainer);
