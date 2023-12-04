import { colors } from "./Colors.styles";
import { BUTTON_HEIGHT, BUTTON_RADIUS } from "./Dimesnsions";
import { FONT } from "./font";

export const componentStyles = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
      variant: "contained"
    },
    styleOverrides: {
      root: {
        height: BUTTON_HEIGHT,
        minWidth: 150,
        textTransform: "capitalize",
        fontFamily: FONT.w500,
        fontSize: "14px",
        borderRadius: BUTTON_RADIUS
      },
      sizeLarge: {
        height: BUTTON_HEIGHT + 10,
        fontSize: "1.2rem",
        fontFamily: FONT.w500
      },
      sizeMedium: {
        height: BUTTON_HEIGHT
      },
      sizeSmall: {
        height: 35,
        fontFamily: FONT.w500,
        fontSize: "0.857rem",
        width: 30,
        borderRadius: 8
      },
      rounded: {
        color: colors.text.normal,
        border: `2px solid ${colors.border.main}`,
        borderRadius: 20
      },
      contained: {
        color: colors.text.heading
      },
      outlined: {
        backgroundColor: colors.layout.background,
        color: colors.text.normal,
        border: `2px solid ${colors.border.main}`,
        borderWidth: 1.5
      },
      text: {
        backgroundColor: colors.layout.background,
        color: colors.primary.main,
        border: `none`
      }
    }
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        minHeight: `${BUTTON_HEIGHT}px`,
        backgroundColor: colors.layout.background,
        marginTop:'5px',
        borderRadius: BUTTON_RADIUS,
        // border: "1px solid var(--borders-default, #494949)",
        fontSize: "14px",
        fontFamily: FONT.w400,
        color: colors.text.normal,
        "& input, .MuiSelect-outlined": {
          padding: "inherit",
          paddingLeft: 12,
          paddingRight: 0,
          borderColor: colors.primary.light
        },
        "&:hover fieldset": {
          borderColor: colors.primary.light + "!important" // doesnt work
        }
      },
      sizeSmall: {
        minHeight: BUTTON_HEIGHT - 10
      },
      sizeMedium: {
        minHeight: `${BUTTON_RADIUS}px`
      }
    }
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        marginLeft: 0
      }
    }
  },
  MuiOutlinedInput: {
    defaultProps: {
      notched: false
    },
    styleOverrides: {
      root: {
        borderRadius: BUTTON_RADIUS
      },
      notchedOutline: {
        borderColor: colors.border.main
      },
      sizeMedium: {
        minHeight: `${BUTTON_HEIGHT}px`
      }
    }
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: {
        fontFamily: FONT.w500,
        marginTop: "0!important",
        ".MuiTypography-root,.MuiInputBase-root": {
          fontFamily: FONT.w300,
          color: colors.text.normal
        }
      },
      filled: {
        marginTop: "0!important"
      }
    }
  },
  MuiFilledInput: {
    defaultProps: {
      disableUnderline: true
    },
    styleOverrides: {
      root: {
        marginTop: "0!important",

        borderRadius: BUTTON_RADIUS
      }
    }
  },
  MuiDataGrid: {
    styleOverrides: {
      root: {
        border: "none",
        color: colors.text.normal
      },

      cell: {
        borderBottom: "none",
        "& .MuiDataGrid-columnSeparator": {
          display: "none"
        }
        // "& .css-min7y3-MuiDataGrid-root .MuiDataGrid-cell ": {
        //   borderBottom: "none"
        // }
      },
      columnHeaders: {
        borderBottom: "none"
      }
    }
  },

  MuiMenu: {
    styleOverrides: {
      list: {
        '&[role="menu"]': {
          backgroundColor: colors.layout.secondary,
          color: colors.text.normal
        }
      }
    }
  },

  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundColor: colors.layout.secondary
      }
    }
  }
};
