import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { colors } from "../Theme/Colors.styles";

const NavLinkMui = React.forwardRef((props, forwardedRef) => <NavLink {...props} ref={forwardedRef} />);

function SingleLevelItem({ menu, open }) {
  const { title, path, icon: Icon, isCurrentNav } = menu;

  return (
    <ListItem disablePadding sx={{ display: "block" }}>
      <ListItemButton
        component={NavLinkMui}
        to={path}
        sx={{
          minHeight: 54
        }}
      >
        <Box
          className='highlighter'
          sx={{
            // width: 6,
            position: "absolute",

            right: 0,
            height: 54,
            backgroundColor: colors.primary.main,
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5
          }}
        />

        <ListItemIcon
          sx={{
            minWidth: 0,
            justifyContent: "center",
            display: "flex",
            alignItems: "center"
          }}
        >
          {/* {isCurrentNav && (
            <Typography variant='24600' color={colors.primary.main}>
              .
            </Typography>
          )} */}
          <Icon fill='none' />
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
}

export default SingleLevelItem;
