import React from "react";
import PropTypes from "prop-types";
import SubHeader from "./SubHeader";
import { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NavigationIcon from "@material-ui/icons/Navigation";
import ButtonGroup from "@material-ui/core/ButtonGroup";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    marginTop: '60px',
  },
  
}));

const contacts = [
  {
    id: "LinkedIn",
    color: "rgba(40,103,178)",
    icon: "fab fa-linkedin-in",
    url: "https://www.linkedin.com/in/execamit/",
  },
  {
    id: "Twitter",
    color: "rgba(29,161,242)",
    icon: "fab fa-twitter",
    url: "https://twitter.com/execamit",
  },
  {
    id: "Facebook",
    color: "rgba(66, 103, 178)",
    icon: "fab fa-facebook-f",
    url: "https://www.facebook.com/execamit",
  },
  {
    id: "Medium",
    color: "rgba(100, 100, 100)",
    icon: "fab fa-medium-m",
    url: "https://medium.com/@execamit",
  },
  {
    id: "Maps",
    color: "#7B3AE5",
    icon: "fas fa-map-marked",
    url: "https://goo.gl/maps/3dHMAmQpgfcFm4YU9",
  },
];

const Contact = (props) => {
  const classes = useStyles();
  //    const theme = useTheme();

  const [activeCard, setActiveCard] = React.useState(0);
  const onMouseEnterHandler = (i) => (e) => {
    console.log("enter handler", i);
    setActiveCard(i);
  };
  const onMouseLeaveHandler = (i) => (e) => {
    console.log("leave handler", i);
    setActiveCard(0);
  };

  const onClickHandler = (url) => (e) => {
    console.log(url);
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const fabButtons = contacts.map((contact) => (
    <Fab
      onMouseEnter={onMouseEnterHandler(contact.id)}
      onMouseLeave={onMouseLeaveHandler(contact.id)}
      onClick={onClickHandler(contact.url)}
      variant="extended"
      style={{
        backgroundColor: contact.color,
        color: "white",
        marginRight:"3%"
      }}
      aria-label={contact.id}
    >
      <Icon className={contact.icon} />
      {activeCard === contact.id && (
        <p
          style={{
            marginLeft: "10px",
            textTransform: "none",
          }}
        >
          {contact.id}
        </p>
      )}
    </Fab>
  ));
  return (
    <Fragment>
      {/* <SubHeader>Let's Connect</SubHeader> */}
      <div className={classes.root}>
        {props.displayInline ? (
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            {fabButtons}
          </ButtonGroup>
        ) : (
          fabButtons
        )}
      </div>
    </Fragment>
  );
};

export default Contact;
Contact.propTypes = {
  displayInline: PropTypes.string,
};
