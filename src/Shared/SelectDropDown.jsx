import { MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import { colors } from "../Theme/Colors.styles";

function SelectDropDown(props) {
  const { value, onChange, options, fullWidth } = props;

  return (
    <Select labelId='demo-multiple-chip-label' id='demo-multiple-chip' fullWidth={fullWidth} value={value} onChange={onChange}>
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          <Typography variant='12400' color={colors.text.normal}>
            {option}
          </Typography>
        </MenuItem>
      ))}
    </Select>
  );
}

export default SelectDropDown;
