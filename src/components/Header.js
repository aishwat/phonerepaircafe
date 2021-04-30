import React from "react";
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
  const redirectHandler = (redirect_to) => () => {
    console.log(redirect_to);
    history.push(redirect_to);
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
  const menuItems = (
    <Fragment>
      <MenuItem onClick={redirectHandler("/journey")}>
        <IconButton aria-label="journey" color="inherit">
          <Icon className="fas fa-user-tie" color="inherit" />
        </IconButton>
        <p>Journey</p>
      </MenuItem>
      <MenuItem onClick={redirectHandler("/pics")}>
        <IconButton aria-label="pics" color="inherit">
          <Icon className="fas fa-camera" color="inherit" />
        </IconButton>
        <p>Pics</p>
      </MenuItem>
      <MenuItem onClick={redirectHandler("/books")}>
        <IconButton aria-label="books" color="inherit">
          <Icon className="fas fa-book-reader" color="inherit" />
        </IconButton>
        <p>Books</p>
      </MenuItem>
      <MenuItem onClick={redirectHandler("/writings")}>
        <IconButton aria-label="writings" color="inherit">
          <Icon className="fas fa-pen-fancy" color="inherit" />
        </IconButton>
        <p>Writings</p>
      </MenuItem>
    </Fragment>
  );
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

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MenuItem onClick={redirectHandler("/")}>
            <Typography variant="h6" className={classes.title}>
              Amit Kumar (CEO OLX Autos)
            </Typography>
          </MenuItem>
          {/* <Button color="inherit">Login</Button> */}
          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>{menuItems}</div>
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
      {renderMobileMenu}
    </div>
  );
};

export default Header;
