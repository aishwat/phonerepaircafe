import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import ButtonGroup from "@material-ui/core/ButtonGroup";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    padding: "10px",
    overflowX: "scroll",
  },
}));

const contacts = [
  {
    id: "9350433533",
    color: "rgba(29,161,242)",
    icon: "fas fa-mobile-alt",
    url: "tel:9350433533",
  },
  {
    id: "9350 533 533",
    color: "rgba(29,161,242)",
    icon: "fas fa-phone-alt",
    url: "tel:9350 533 533",
  },

  {
    id: "Maps",
    color: "#7B3AE5",
    icon: "fas fa-map-marked",
    url: "https://goo.gl/maps/LvkXFzMoBMXieeqWA",
  },
  {
    id: "Facebook",
    color: "rgba(66, 103, 178)",
    icon: "fab fa-facebook-f",
    url: "https://www.facebook.com/people/The-Phone-Repair-Cafe/100064023334142/",
  },
  {
    id: "Instagram",
    color: "#8a3ab9",
    icon: "fab fa-instagram",
    url: "https://www.instagram.com/p/CWZmCIQvPtS/",
  },
  {
    id: "Telegram",
    color: "rgba(0, 136, 204)",
    icon: "fab fa-telegram-plane",
    url: "https://t.me/joinchat/2ZgoU2uVckE0ZjI1",
  },
  {
    id: "YouTube",
    color: "rgba(200,10,10)",
    icon: "fab fa-youtube",
    url: "https://youtube.com/channel/UCxpPigvW0nhmt8dYvnXpzfA",
  },

  {
    id: "thephonerepaircafe2020@gmail.com",
    color: "#bc00f5",
    icon: "fas fa-envelope",
    url: "mailto:thephonerepaircafe2020@gmail.com",
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
      key={contact.id}
      onMouseEnter={onMouseEnterHandler(contact.id)}
      onMouseLeave={onMouseLeaveHandler(contact.id)}
      onClick={onClickHandler(contact.url)}
      variant="extended"
      style={{
        backgroundColor: contact.color,
        color: "white",
        marginRight: props.displayInline ? "" : "3%",
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
    <div
      className={classes.root}
      style={{ marginTop: props.displayInline ? "auto" : "60px" }}
    >
      {props.displayInline ? (
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          {fabButtons}
        </ButtonGroup>
      ) : (
        fabButtons
      )}
    </div>
  );
};

export default Contact;
Contact.propTypes = {
  displayInline: PropTypes.string,
};
