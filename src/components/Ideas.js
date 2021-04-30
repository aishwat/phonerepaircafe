import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
// import tileData from "./tileData";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const tileData = [
  {
    img: "https://youtu.be/GKOOjWNMFsE",
    title: "Image",
    author: "author",
  },
  {
    img: "https://youtu.be/GKOOjWNMFsE",
    title: "Image",
    author: "author",
  },
];

const Ideas = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={3} style={{ height: "auto" }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <video controls autoPlay src={tile.img} />

            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default Ideas;


<iframe
  width="562"
  height="382"
  src="https://www.youtube.com/embed/GKOOjWNMFsE"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>;