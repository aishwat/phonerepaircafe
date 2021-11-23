import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Profile from "../assets/banner.jpg";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  grid: {
    // borderWidth: "thin",
    // border: "#666666",
    // borderStyle: "dashed",
    // backgroundColor: "#e1e1e1",
    justifyContent: "center",
    alignItems: "center",
    // padding: "3%",
  },
  profile_pic: {
    width: 600,
    height: 350,
    backgroundImage: `url(${Profile})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
    backgroundSize: "cover",
    marginTop: "20px",
    overflow: "scroll"
    // border: "1px solid grey",
  },

  // profile_pic: {
  //   maxWidth: "100%",
  //   width: "450px",
  // },
  profile_text: {
    textAlign: "left",
    // margin: "auto",
    margin: "40px 0px 0px 20px",
    // border: "1px solid red",
  },
  title: {
    marginBottom: "20px",
  },
  border: {
    // borderWidth: "thin",
    // border: "#666666",
    // borderStyle: "dashed",
    // backgroundColor: "#e1e1e1",
  },
}));

const Intro = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const onMouseEnterHandler = (id) => (e) => {
    console.log("enter handler", id);
    setActiveStep(id);
  };
  const onMouseLeaveHandler = (id) => (e) => {
    console.log("leave handler", id);
    setActiveStep(0);
  };
  
  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12} sm={6} className={classes.border}>
        <div className={classes.profile_text}>
          <Typography variant="h5" component="h2" color="primary">
            Welcome to The Phone Repair Cafe
          </Typography>
          <Typography
            className={classes.title}
            color="secondary"
            gutterBottom
          >
            Where phone repair is an experience ☕
          </Typography>
          <Typography gutterBottom>
            We offer a wide range of mobile phone repair services like mic, battery, speaker, back panel, charging jack replacement and more!
            <ul>
              <li>Must try the services, very reasonable prices, cheaper then online and good quality.</li>
              <li>
                Repair your phone at doorstep/ at store ( in GAUR CITY CENTRE, ADJACENT GAUR CITY MALL)
              </li>
              <li>Trained Professionals and Doorstep Service</li>
            </ul>
          </Typography>

          <Typography gutterBottom>
            Services available:
            <ul>
              <li>Screen repair/replacement</li>
              <li>Battery replacement</li>
              <li>Mic replacement</li>
              <li>Receiver replacement</li>
              <li>Charging jack replacement/ charging pcb replacement</li>
              <li>Speaker replacement</li>
              <li>Back panel replacement</li>
            </ul>
          </Typography>
          <Typography gutterBottom>
            Why us:
            <ul>
              <li>Premium repair: top quality certified parts</li>
              <li>Instant mobile repair: mobile repair on the spot in "THE PHONE REPAIR CAFE" STORE IN GAUR CITY</li>
              <li>Skilled Technicians: trained and qualified professionals</li>
              <li>Guaranteed safety: Total device data security</li>
              <li>We only use the top quality parts to repair your mobile phone</li>
            </ul>
          </Typography>
        </div>
      </Grid>
      {/* <Grid item xs={12} sm={6}>
        <img src={Profile} className={classes.profile_pic} />
      </Grid> */}
      <Grid
        item
        sm={5}
        xs={12}
        className={classes.border}
        onMouseEnter={onMouseEnterHandler("profile_pic")}
        onMouseLeave={onMouseLeaveHandler("profile_pic")}
      >
        <Paper
          className={classes.profile_pic}
          elevation={activeStep === "profile_pic" ? 8 : 2}
        />
      </Grid>
    </Grid>
  );
};

export default Intro;
