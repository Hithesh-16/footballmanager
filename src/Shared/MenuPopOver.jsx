import { Box, Menu, MenuItem, Stack, Typography, createStyles } from "@mui/material";
import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { colors } from "../Theme/Colors.styles";
import styled from "@emotion/styled";
import PenIcon from "../Assets/Icons/PenIcon";
import { Delete } from "@mui/icons-material";

const useStyles = styled((theme) => {
  return createStyles({
    menuRoot: {
      minWidth: "400px"
    }
  });
});

function MenuPopOver(props) {
  const { open, anchorEl, setAnchorEl, setDeleteDailog, setEditDailog } = props;
  const classes = useStyles();

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Menu
      className={classes.menuRoot}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
    >
      <Box sx={{ width: 233, height: 166, padding: "10px 25px" }}>
        <Stack direction='row' justifyContent='space-between' mb={1}>
          <Typography variant='18600' color={colors.text.heading}>
            Actions
          </Typography>
          <ClearIcon sx={{ cursor: "pointer" }} onClick={handleClose} />
        </Stack>
        <MenuItem
          sx={{ padding: "3px 0" }}
          onClick={() => {
            setEditDailog(true);
            handleClose();
          }}
        >
          <Stack direction='row' mt={2} alignItems='center'>
            <PenIcon mr={1} />
            <Typography ml={1} variant='14500' color={colors.text.normal}>
              Edit Player
            </Typography>{" "}
          </Stack>
        </MenuItem>
        <MenuItem
          sx={{ padding: "3px 0" }}
          onClick={() => {
            setDeleteDailog(true);
            handleClose();
          }}
        >
          <Stack direction='row' mt={2} alignItems='center'>
            <Delete />
            <Typography ml={1} variant='14500' color={colors.text.normal}>
              Delete Player
            </Typography>{" "}
          </Stack>
        </MenuItem>
      </Box>
    </Menu>
  );
}

export default MenuPopOver;
