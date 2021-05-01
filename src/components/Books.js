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

import B1 from "../assets/b1.jpg";
import B2 from "../assets/b2.jpg";
import B3 from "../assets/b3.jpg";
import B4 from "../assets/b4.jpg";
import B5 from "../assets/b5.jpg";
import B6 from "../assets/b6.jpg";

const useStyles = makeStyles({
  card: {
    maxWidth: 350,
    margin: 'auto',
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
  grid:{
    justifyContent:"space-around"
  },
  gridItem: {
    margin:"10px 10px 30px 10px",
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
    id: "b1",
    cover: B1,
    url: "https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    desc:
      "This book is my bible in psychology. How we think and why? Nobel Laureate Daniel Kahneman, you changed the way I think both in personal and professional domains",
  },
  {
    id: "b2",
    cover: B2,
    url: "https://www.goodreads.com/book/show/3478266-the-price-of-everything",
    title: "The Price of Everything: A Parable of Possibility and Prosperity",
    author: "Russell Roberts",
    desc:
      "Economics is in everything, How do  governments decide on prioritising projects, What is the price of saving a life? Why do we tip  in certain  geographies and and not tip  in others",
  },
  {
    id: "b3",
    cover: B3,
    url: "https://www.goodreads.com/book/show/34890015-factfulness",
    title:
      "Factfulness: Ten Reasons We're Wrong About the World – and Why Things Are Better Than You Think",
    author: "Hans Rosling, Ola Rosling, Anna Rosling Rönnlund",
    desc:
      "Knowing that our world is not just developing and developed any more. Our world is a much better place than we think.  It is an unputdownable book. Thanks Hans Rosling.",
  },
  {
    id: "b4",
    cover: B4,
    url: "https://www.goodreads.com/book/show/23692271-sapiens",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    desc:
      "This book changed the way I look at life. How our evolution has shaped our behaviour as a specie? A lot of what we see around  has just been a  couple of centuries (Dense urbanisation, Technology)",
  },
  {
    id: "b5",
    cover: B5,
    url: "https://www.goodreads.com/search?q=predictably&qid=B4mOPgsMiy",
    title: "Predictably Irrational: The Hidden Forces That Shape Our Decisions",
    author: "Dan Ariely",
    desc:
      "Knowing that humans behave irrationally is  important, but even more important to know is: What we believe to be rational happens to be irrational :) I am a fan of Dan Ariley",
  },
  {
    id: "b6",
    cover: B6,
    url: "https://www.goodreads.com/book/show/28815.Influence",
    title: "Influence: The Psychology of Persuasion",
    author: "Robert B. Cialdini",
    desc:
      "Psychology 101. A must read book for everyone. Our behaviour is dependent on what we see around us. E.g. We go to a shop which  has a long queue, even though it might  not be the best!!!",
  },
];

const Books = () => {
  const classes = useStyles();
  const [activeBook, setActiveBook] = React.useState(0);
  const onMouseEnterHandler = (id) => (e) => {
    console.log("enter handler", id);
    setActiveBook(id);
  };
  const onMouseLeaveHandler = (id) => (e) => {
    console.log("leave handler", id);
    setActiveBook(0);
  };

  const cardClickHandler = (book) => (e) => {
    console.log(book.title);
    const newWindow = window.open(book.url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Fragment>
      <SubHeader>I Love Reading!!!</SubHeader>
      <Grid container className={classes.grid}>
        {books.map((book) => (
          <Grid
            key={book.id}
            item
            // xs={12}
            // sm={4}
            //
            className={classes.gridItem}
            onMouseEnter={onMouseEnterHandler(book.id)}
            onMouseLeave={onMouseLeaveHandler(book.id)}
          >
            <Card
              className={classes.card}
              elevation={activeBook == book.id ? 8 : 2}
            >
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
                  gutterBottom
                  variant="caption"
                  color="textSecondary"
                >
                  By {book.author}
                </Typography>
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

export default Books;
