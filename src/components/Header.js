import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Icon from "@material-ui/core/Icon";
import { loadCSS } from "fg-loadcss";
import { Fragment } from "react";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > .fa": {
      margin: theme.spacing(2),
    },
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // display: "none",
    // [theme.breakpoints.up("sm")]: {
    //   display: "block",
    // },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const [activeMenuItem, setActiveMenuItem] = useState(0);

  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  const history = useHistory();
  const redirectHandler = (menuItem, index) => () => {
    const redirect_to = `/${menuItem.name || ""}`;
    console.log(redirect_to);
    history.push(redirect_to);
    setActiveMenuItem(index||0);
  };

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";

  const menuData = [
    {
      name: "",
      label: "Home",
      icon: "fas fa-user",
    },
    {
      name: "journey",
      label: "Journey",
      icon: "fas fa-seedling",
    },
    {
      name: "ideas",
      label: "Ideas",
      icon: "fas fa-lightbulb",
    },
    {
      name: "pics",
      label: "Pics",
      icon: "fas fa-image",
    },
    {
      name: "books",
      label: "Books",
      icon: "fas fa-book",
    },
    {
      name: "writings",
      label: "Writings",
      icon: "fas fa-pen",
    },
  ];

  //  <Tabs value={1} onChange={tabChangeHandler} aria-label="simple tabs"></Tabs>
  const menuItems =
    // <Fragment>
    menuData.map((menu, index) => (
      <MenuItem onClick={redirectHandler(menu, index)}>
        <IconButton aria-label={menu.name} color="inherit">
          <Icon className={menu.icon} color="inherit" />
        </IconButton>
        <p>{menu.label}</p>
      </MenuItem>
    ));
    // </Fragment>
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <div>{menuItems}</div>
    </Menu>
  );

  const tabChangeHandler = (id) => (e) => {
    console.log(id);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <MenuItem onClick={redirectHandler("/")}>
            <Typography variant="h6" className={classes.title}>
              Amit Kumar (CEO OLX Autos)
            </Typography>
          </MenuItem>
          {/* <Button color="inherit">Login</Button> */}
          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            <Tabs value={activeMenuItem} aria-label="menu tabs">
              {menuItems}
            </Tabs>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
      {renderMobileMenu}
    </div>
  );
};

export default Header;
