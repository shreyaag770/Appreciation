import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  margin: {
    width: 155,
    height: 41,
    boxShadow: "2px",
    borderRadius: 30,
    background: "#999999",
    opacity: 0.5,
    color: "black",
    fontSize: "12px",
  },

  root: {
    flexGrow: 1,
    maxWidth: 300,
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
  extra: {
    margin: 0,
  },
  extratwo: {
    display: "flex",
  },
  extrathree: {
    margin: "15px",
  },
}));

const Buttons = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Card className={classes.root} spacing={1}>
        <CardActionArea>
          <CardContent className={classes.extra}>
            <div>
              <Link to={`/praise/${props.id}`}>
                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  className={classes.margin}
                >
                  <div className={classes.extratwo}>
                    <div className={classes.extrathree}>PRAISES</div>
                    <div className={classes.extrathree}>
                      {props.appreciation}
                    </div>
                  </div>
                </Button>
              </Link>
            </div>
            <div>
              <Link to={`/highfive/${props.id}`}>
                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  className={classes.margin}
                >
                  <div className={classes.extratwo}>
                    <div className={classes.extrathree}>HIGHFIVES</div>
                    <div className={classes.extrathree}>{props.highfives}</div>
                  </div>
                </Button>
              </Link>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
};

export default Buttons;