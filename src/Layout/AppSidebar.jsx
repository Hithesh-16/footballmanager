import { Box, Drawer, List } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SingleLevelItem from "./SingleLevelItem";
import Logo from "../Assets/Logo";
import UserIcon from "../Assets/Icons/UserIcon";
import { colors } from "../Theme/Colors.styles";
import { useLocation } from "react-router-dom";

function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className='AppSidebar'>
      <Drawer
        variant='permanent'
        docked={false}
        sx={{ width: 60, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: 60, boxSizing: "border-box", padding: 0 } }}
      >
        <Box display='flex' justifyContent='center' bgcolor={colors.layout.main} sx={{ padding: 0, border: "none", paddingTop: 2 }}>
          <Avatar sx={{ width: 24, height: 24, border: "1px solid #FEA013" }}>
            <Logo />
          </Avatar>
        </Box>

        <List
          sx={{
            height: "100%",
            overflow: "auto",
            py: 2,
            backgroundColor: colors.layout.main
          }}
        >
          <SingleLevelItem
            menu={{
              title: "Team",
              path: "/",
              isCurrentNav: currentPath === "/",
              icon: () => <MenuIcon sx={{ color: currentPath === "/" ? colors.primary.main : colors.primary.normal }} />
            }}
          />
          <SingleLevelItem
            menu={{
              title: "Formation Overiew",
              path: "/formation",
              isCurrentNav: currentPath === "/formation",
              icon: () => <UserIcon sx={{ color: currentPath === "/formation" ? colors.primary.main : colors.primary.normal }} />
            }}
          />
        </List>
      </Drawer>
    </div>
  );
}

export default AppSidebar;
