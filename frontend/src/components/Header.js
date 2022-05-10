import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ourToken, setUser } from "../app/slice/auth";

const pages = [
  {
    name: "Main",
    link: "../",
  },
  {
    name: "Games",
    link: "../search/game",
  },
  {
    name: "Developers",
    link: "../search/developer",
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const Header = () => {
  const user = useSelector((state) => state?.auth?.user?.role);
  const token = useSelector(ourToken);
  return (
    <AppBar sx={{ position: "relative", backgroundColor: "#000000", }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" }}}
          >
            GAME LIBRARY
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((elem) => (
                <Link to={elem.link}>
                  <MenuItem key={elem.name}>
                    <Typography textAlign="center">{elem.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((elem) => (
              <Link to={elem.link}>
                <StyledBtn
                  key={elem.link}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {elem.name}
                </StyledBtn>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {user == 1 && (
              <Link to="/admin">
                <StyledBtn sx={{ my: 2, color: "white", display: "inline" }}>
                  Admin Page
                </StyledBtn>
              </Link>
            )}
            {token ? (
              <Link to="/login">
                <StyledBtn
                  key={"Logout"}
                  sx={{ my: 2, color: "white", display: "inline" }}
                >
                  Log out
                </StyledBtn>
              </Link>
            ) : (
              <Link to="/login">
                <StyledBtn
                  key={"Logout"}
                  sx={{ my: 2, color: "white", display: "inline" }}
                >
                  Log in
                </StyledBtn>
              </Link>
            )}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledBtn = styled(Button)`
  color: #fff !important;
  text-decoration: none !important;
  .MuiButton-textPrimary {
    color: #fff !important;
  }
`;
