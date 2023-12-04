import { createTheme } from "@mui/material";
import { colors } from "./Colors.styles";
import { FONT, MuiCssBaseline } from "./font";
import fontMedium from "../Assets/Fonts/Poppins-Medium.ttf";
import { componentStyles } from "./components.styles";

export const theme = createTheme({
  palette: colors,
  backgroundColor:colors.layout.background,
  typography: {
    fontFamily: fontMedium,
    color: colors.text.theme,
    24500: {
      fontFamily: FONT.w500,
      fontSize: "24px"
    },
    24600: {
      fontFamily: FONT.w600,
      fontSize: "24px"
    },
    41600: {
      fontFamily: FONT.w600,
      fontSize: "41px",
      color: colors.text.theme
    },
    18600: {
      color: colors.text.heading,
      fontFamily: FONT.w600,
      fontSize: "18px"
    },
    O12500: {
      color: colors.text.theme,
      fontFamily: FONT.w500,
      fontSize: 12
    },
    12500: {
      fontFamily: FONT.w500,
      fontSize: 12
    },
    12400: {
      fontFamily: FONT.w400,
      fontSize: 12
    },
    14500: {
      fontFamily: FONT.w500,
      fontSize: 14
    },
    14400: {
      fontFamily: FONT.w400,
      fontSize: 14
    },
    16600: {
      fontFamily: FONT.w600,
      fontSize: 16
    }
  },
  components: {
    MuiCssBaseline,
    ...componentStyles,
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "black"
        }
      }
    }
  }
});
