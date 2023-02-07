import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { user } from "../Data";

const Navbar = () => {
  const styles = {
    title: {
      mr: 2,
      flexGrow: 1,
      marginLeft: "23px",
      display: { xs: "flex", md: "flex" },
      color: "inherit",
      textDecoration: "none",
    },
    username: {
      flexGrow: 0,
      marginRight: "10px",
      display: { xs: "flex", md: "flex" },
      fontFamily: "'Inter', sans-serif",
      fontWeight: "bold",
    },
    avatar: { flexGrow: 0, marginRight: "15px" },
  };

  return (
    <AppBar sx={{ bgcolor: "#101010" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h5" noWrap className="title" sx={styles.title}>
            RideList
          </Typography>
          <Box sx={styles.username}>
            {user.name}
            {/* displays the avatar at right */}
          </Box>
          <Box sx={styles.avatar}>
            <Tooltip title="Avatar">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={require("../img/avatar.png")} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
