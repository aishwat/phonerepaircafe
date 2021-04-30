import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Profile from "../assets/img_lo.jpeg";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  grid: {
    // borderWidth: "thin",
    // border: "#666666",
    // borderStyle: "dashed",
    // backgroundColor: "#e1e1e1",

    direction: "row",
    justify: "",
    alignItems: "center",
    padding: "40px",
  },
  profile_pic: {
    maxWidth: "100%",
    width: "450px",
    // border: "1px solid grey",
  },
  profile_text: {
    textAlign: "left",
    margin: "auto",
    // margin: "40px 0px 0px 20px",
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
  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12} sm={6} className={classes.border}>
        <div className={classes.profile_text}>
          <Typography variant="h5" component="h2" color="primary">
            Welcome to Amit Kumar's home page
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            CEO OLX Autos in India
          </Typography>
          <Typography gutterBottom>
            An accomplished business leader who has built
            <ul>
              <li>Across startups and large organisations</li>
              <li>
                Businesses grounds up in markets of Asia, Africa and Europe
              </li>
              <li>Built and led teams from 1 to 1500 with 50+ nationalities</li>
            </ul>
          </Typography>

          <Typography gutterBottom>
            An individual
            <ul>
              <li>A Public Speaker, a Startup Mentor & a columnist</li>
              <li>Graduate from Indian institution of Technology, Bombay</li>
              <li>MBA from Indian school of Business, Hyderabad</li>
            </ul>
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <img src={Profile} className={classes.profile_pic} />
      </Grid>
    </Grid>
  );
};

export default Intro;
