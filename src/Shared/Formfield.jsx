import { FormControl, FormLabel, InputAdornment, TextField, Typography } from "@mui/material";
import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import AppButton from "./AppButton";
import { colors } from "../Theme/Colors.styles";
import { isEmpty } from "lodash";

function Formfield(props) {
  const {
    label,
    inputSx,
    fullWidth,
    variant: _variant,
    dropdownProps,
    endLabel,
    startLabel,
    required,
    labelStyle,
    sx,
    endAction,
    startAction,
    onkeyDown,
    buttonClick,
    endButton,
    showButton,
    showClear,
    onClear,
    ...restProps
  } = props;

  return (
    <FormControl fullWidth={fullWidth}>
      {label && (
        <FormLabel htmlFor='outlined-adornment-password' sx={({ fontSize: "1rem" }, labelStyle)}>
          <Typography variant='14500' color={colors.text.heading}>
            {" "}
            {label}
          </Typography>
          {required && <font color='red'> *</font>}
        </FormLabel>
      )}
      <TextField
        variant={_variant}
        onKeyDown={(evt) =>
          onkeyDown ? onkeyDown(evt) : restProps?.type === "number" ? ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault() : null
        }
        sx={{ ...sx, minHeight: 20, marginTop: 1 }}
        InputProps={{
          endAdornment: (endLabel || dropdownProps || endAction || endButton || showClear) && (
            <>
              {endLabel && <InputAdornment position='start'>{endLabel}</InputAdornment>}
              {endAction && endAction}
              {endButton && showButton && (
                <AppButton onClick={buttonClick} variant='text'>
                  {endButton?.label}
                </AppButton>
              )}
              {showClear && <ClearIcon sx={{ cursor: "pointer" }} onClick={onClear} />}
            </>
          ),
          startAdornment: (startLabel || startAction) && (
            <>
              {startLabel && <InputAdornment position='start'>{startLabel}</InputAdornment>}
              {startAction && startAction}
            </>
          ),
          sx: { ...inputSx },
          ...restProps.InputProps
        }}
        {...restProps}
      />
    </FormControl>
  );
}

export default Formfield;
