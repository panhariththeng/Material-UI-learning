import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";

export const MuiDrawer = () => {
  const [isDrawOpen, setIsDrawOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawOpen}
        onClose={() => setIsDrawOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            {" "}
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};
