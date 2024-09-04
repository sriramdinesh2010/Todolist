import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { TbCheckbox } from "react-icons/tb";

const NavBar = () => {
  return (
    <AppBar position="static" color="info">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TbCheckbox
            fontSize={28}
            fontWeight={900}
            style={{ margin: "10px" }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Todo List
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            TODO LIST
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
