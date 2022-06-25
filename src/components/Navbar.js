import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import axios from "axios";

const Navbar = () => {
  const [name, setname] = useState("");
  // const [scode, setscode] = useState("");
  const [url, seturl] = useState("");
  const styles = {
    title: {
      mr: 2,
      flexGrow: 1,
      marginLeft: "9px",
      display: { xs: "flex", md: "flex" },
      color: "inherit",
      textDecoration: "none",
    },
    username: {
      flexGrow: 0,
      marginRight: "10px",
      display: { xs: "flex", md: "flex" },
    },
    avatar: { flexGrow: 0, marginRight: "15px" },
  };

  useEffect(() => {
    axios.get("https://assessment.api.vweb.app/user").then((response) => {
      const user = response.data;
      setname(user.name);
      // setscode(user.station_code);
      seturl(user.url);
    });
  }, []);

  return (
    <AppBar sx={{ bgcolor: "#101010" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h5" noWrap component="h5" className="title" sx={styles.title}>
            RideList
          </Typography>

          <Box sx={styles.username}>
            {name}
            {/* displays the avatar at right */}
          </Box>

          <Box sx={styles.avatar}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={url} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
