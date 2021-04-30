import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import SubHeader from "./SubHeader";
import { Fragment } from "react";

import P1 from "../assets/p1.jpg";
import P2 from "../assets/p2.jpeg";
import P3 from "../assets/p3.jpg";
import P4 from "../assets/p4.png";
import P5 from "../assets/p5.jpg";
import P6 from "../assets/p6.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
  },
  media: {
    width: "100%",
    // opacity:"0.8"
  },
  desc: {
    marginTop: "10px",
  },
  border: {
    // borderWidth: "thin",
    // border: "#666666",
    // borderStyle: "dashed",
    // backgroundColor: "#e1e1e1",
  },
  gridItem: {
    // margin:"0px 0px 30px 0px",
    // borderWidth: "thin",
    // border: "#666666",
    // borderStyle: "dashed",
    // backgroundColor: "#e1e1e1",
  },
  cardContent: {
    // backgroundColor: "#e1e1e1",
  },
});

const books = [
  {
    id: "p1",
    cover: P1,
    url:
      "https://www.financialexpress.com/industry/technology/start-re-imagining-your-cars-apple-is-here-to-disrupt-mobility/2219104/",
    title: "Start Re-imagining your cars - Apple is here to disrupt mobility",
    desc:
      "Apple changed the way we used mobile phones, the way we used to listen to music. It is a disruptive cash rich force which has changed many industries. It is all set to enter mobility in 2024 by launching cars.",
  },
  {
    id: "p2",
    cover: P2,
    url:
      "http://www.businessworld.in/article/Top-5-Trends-For-The-202x-Decade-In-Automobile-Industry-Disrupt-Or-Die-/19-01-2021-367100/",
    title: "Top 5 trends in 202x decade in Automobile industry: Disrupt or Die",
    desc:
      "Automobile is a legacy industry, which has yet not seen tectonic digital disruption. 202x decade will be a paradigm shift from internal combustion to EV's, ownership to subscription, human driven to self driven....",
  },
  {
    id: "p3",
    cover: P3,
    url:
      "http://www.businessworld.in/article/2020-for-Indian-Automobile-sector-A-Forgettable-Year-Which-Started-The-Build-Up-Of-The-Digital-Future-/06-01-2021-362187/",
    title: "How To Receive Constructive Feedback Effectively",

    desc:
      "Often, people confuse constructive feedback with criticism and that's when the negative emotions start to take the front seat and overleap the positive notations",
  },
  {
    id: "p4",
    cover: P4,
    url: "https://www.entrepreneur.com/article/361602",
    title: "How To Look For an Angel Investor For Your Startup",
    desc:
      "Ideas and practical on finding an investors for your startup when you are in the process of proving the idea.",
  },
  {
    id: "p5",
    cover: P5,
    url: "https://oasis.kr-asia.com/leadership-is-about-mentorship",
    title: "Leadership is about Mentorship",

    desc:
      "The role of mentorship is so propelling that it transforms individuals in every way possible. Role of a great leader is to identify the hidden talent in the team and create environment that allows people to perform beyond their potential.",
  },
  {
    id: "p6",
    cover: P6,
    url: "https://www.entrepreneur.com/article/360222",
    title: "Simple Tricks to Keep Yourself Motivated in tough times",
    desc:
      "Tough times do not last but tough people do. We all go through tough times, some we control and some we influence. Keeping yourself motivated is the key to navigate difficulties.",
  },
];

const Writings = () => {
  const classes = useStyles();

  const cardClickHandler = (book) => (e) => {
    console.log(book.title);
    const newWindow = window.open(book.url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Fragment>
      <SubHeader>Select Publications</SubHeader>
      <Grid container className={classes.border} spacing={4}>
        {books.map((book) => (
          <Grid
            key={book.id}
            item
            xs={12}
            sm={4}
            //
            className={classes.gridItem}
          >
            <Card className={classes.root}>
              <CardActionArea onClick={cardClickHandler(book)}>
                <CardMedia
                  component="img"
                  alt={book.title}
                  // height="100"
                  className={classes.media}
                  image={book.cover}
                  title={book.title}
                />
              </CardActionArea>
              <CardContent className={classes.cardContent}>
                <CardActionArea onClick={cardClickHandler(book)}>
                  <Typography variant="h5" component="h2" color="primary">
                    {book.title}
                  </Typography>
                </CardActionArea>

                <Typography
                  variant="body2"
                  component="p"
                  className={classes.desc}
                >
                  {book.desc}
                </Typography>
              </CardContent>

              {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default Writings;
