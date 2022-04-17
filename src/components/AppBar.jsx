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
import MenuItem from "@mui/material/MenuItem";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import me from "../assets/img/me.png";
import { Link } from "@mui/material";

const pages = [
  // { label: "Blog", link: "/blog" },
  // { label: "Vlog", link: process.env.REACT_APP_SM_YOUTUBE },
  { label: "Resume", link: "/resume" },
  { label: "About", link: "/about" },
];

const CustomAppBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "background.paper"}}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            href="/"
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              color: "text.secondary",
              underline: "none",
            }}
          >
            <Avatar
              alt="Omar OUTABARINE"
              src={me}
              sx={{ width: 60, height: 60 }}
            />
            <Link href="/" sx={{ mt: 2, color:"text.secondary", underline: "none"  }} variant="h6" >
              Omar OUTABARINE
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Link href={page.link} variant="h6" color="text.primary">
                    {page.label}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", flexDirection: "row-reverse" },
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={index}
                href={page.link}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block" }}
              >
                <Link
                  href={page.link}
                  variant="button"
                  color="text.secondary"
                  underline="none"
                >
                  {page.label}
                </Link>
              </Button>
            ))}
          </Box>
          <IconButton
            sx={{ ml: 1 }}
            onClick={props.toggleColorMode}
            color="inherit"
          >
            {props.dark === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default CustomAppBar;
