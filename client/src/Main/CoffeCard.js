import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 280,
    borderRadius: 30,
    background: "#ECECEC",
    boxShadow: "none",
    opacity: 0.9,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },

  media: {
    height: 250,
  },
}));

const avtarUseStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    alignItems: "center",
    margin: "auto",
    pading: "5px",
  },
}));

const CoffeCard = (props) => {
  const classes = useStyles();
  const classesAvatar = avtarUseStyles();

  return (
    <Card className={classes.root} spacing={1} onClick={props.clicked}>
      <CardActionArea>
        <CardContent>
          <Avatar
            alt="Remy Sharp"
            src={`/${props.image}`}
            className={classesAvatar.large}
          />

          <Typography variant="body2" color="textSecondary" component="p">
            {props.titles}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default CoffeCard;
