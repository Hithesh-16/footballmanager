import fontBold from "../Assets/Fonts/Poppins-Bold.ttf";
import fontExtraBold from "../Assets/Fonts/Poppins-ExtraBold.ttf";
import fontLight from "../Assets/Fonts/Poppins-Light.ttf";
import fontMedium from "../Assets/Fonts/Poppins-Medium.ttf";
import fontRegular from "../Assets/Fonts/Poppins-Regular.ttf";
import fontSemiBold from "../Assets/Fonts/Poppins-SemiBold.ttf";

export const MuiCssBaseline = {
  styleOverrides: `
      html { font-size: 14px; }
      @font-face {
          font-family: 'fontRegular';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Nunito'), local('Nunito-Regular'), url(${fontRegular}) format('truetype');
      }
      @font-face {
          font-family: 'fontMedium';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: local('Nunito'), local('Nunito-Medium'), url(${fontMedium}) format('truetype');
      }
      @font-face {
          font-family: 'fontSemiBold';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: local('Nunito'), local('Nunito-SemiBold'), url(${fontSemiBold}) format('truetype');
      }
      @font-face {
          font-family: 'fontBold';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: local('Nunito'), local('Nunito-Bold'), url(${fontBold}) format('truetype');
      }
      @font-face {
          font-family: 'fontLight';
          font-style: normal;
          font-display: swap;
          font-weight: 300;
          src: local('Nunito'), local('Nunito-Light'), url(${fontLight}) format('truetype');
      }
      @font-face {
          font-family: 'fontExtraBold';
          font-style: normal;
          font-display: swap;
          font-weight: 800;
          src: local('Nunito'), local('Nunito-ExtraBold'), url(${fontExtraBold}) format('truetype');
      }   
    `
};

export const FONT = {
  w300: "fontLight",
  w400: "fontRegular",
  w500: "fontMedium",
  w600: "fontSemiBold",
  w700: "fontBold",
  w800: "fontExtraBold"
};
export const FONT2 = {
  w600: "font2SemiBold",
  w700: "font2Bold"
};

// px to rem base=14px
/**
 * 12px - 0.857rem
 * 14px - 1rem
 * 15px - 1.071rem
 * 16px - 1.143rem
 * 18px - 1.286rem
 * 20px - 1.429rem
 * 22px - 1.571rem
 * 24px - 1.714rem
 * 26px - 1.857rem
 * 28px - 2rem
 * 30px - 2.143rem
 */
