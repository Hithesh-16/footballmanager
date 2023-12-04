import { FormControl, FormHelperText, FormLabel, MenuItem, Select } from "@mui/material";
import { isEmpty } from "lodash";
import React, { useCallback } from "react";

function DropDown(props) {
  const {
    fullWidth,
    id = "demo-select-small",
    labelId = "demo-select-small",
    value = "",
    onChange,
    options,
    label,
    valueKey = "id",
    labelKey = "label",
    getLabel,
    variant = "outlined",
    getValue,
    containerStyle = { width: 200 },
    error,
    errorMessage,
    helperText,
    style,
    defaultValue = "",
    placeholder,
    required,
    inputProps,
    labelStyle,
    ...selectProps
  } = props;

  const customPlaceholder = placeholder || `Select ${label || "Option"}`;
  const renderLabel = useCallback(
    (op) => {
      if (isEmpty(options)) return null;
      if (getLabel) {
        return getLabel(op);
      }
      return labelKey && op[labelKey];
    },
    [getLabel, labelKey, options]
  );

  const renderValue = useCallback(
    (op) => {
      if (isEmpty(options)) return null;
      if (getValue) {
        return getValue(op);
      }
      return valueKey && op[valueKey];
    },
    [getValue, valueKey, options]
  );

  const handleChange = useCallback(
    ({ target }) => {
      const selectedOp = options.find((v) => v[valueKey] === target.value) || target.value;
      onChange(selectedOp);
    },
    [options]
  );

  return (
    <FormControl error={error} fullWidth={fullWidth}>
      {label && (
        <FormLabel sx={labelStyle}>
          {label} {required && <font color='red'> *</font>}
        </FormLabel>
      )}
      <Select
        SelectDisplayProps={{ style: { paddingTop: 13, paddingBottom: 13 } }}
        id={id}
        labelId={labelId}
        label={label}
        defaultValue={defaultValue}
        value={value}
        onChange={handleChange}
        displayEmpty
        {...style}
        {...selectProps}
        MenuProps={{
          sx: {
            ".MuiPaper-root": { maxHeight: "50%" }
          }
        }}
        inputProps={{
          sx: {
            opacity: value ? 1 : 0.3
          }
        }}
      >
        {customPlaceholder &&
          (value === "" ? (
            <MenuItem disabled value=''>
              {customPlaceholder}
            </MenuItem>
          ) : (
            <MenuItem disabled value={null}>
              {customPlaceholder}
            </MenuItem>
          ))}
        {options?.map((v, k) => (
          <MenuItem key={`op-${k}`} value={renderValue(v)} sx={{ whiteSpace: "normal" }}>
            {renderLabel(v)}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{errorMessage || helperText}</FormHelperText>}
    </FormControl>
  );
}

export default DropDown;
