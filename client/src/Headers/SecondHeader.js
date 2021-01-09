import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import './SecondHeader.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "left",
  },
  container: {
    margin: " 1px 20px ",
  },
  heading: {
    display: "flex",
    margin: "auto",
    position: "absolute",
    width: "586px",
    height: "126px",
    left: "172px",
    top: "144px",
    fontDamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "40px",
    lineHeight: "60px",
    color: "#000000",
  },
  firstHeading: {
    display: "flex",
    margin: "auto",
    position: "absolute",
    width: "586px",
    height: "126px",
    left: "172px",
    top: "144px",
    fontDamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "40px",
    lineHeight: "60px",
    color: "#000000",
  },
  extra: {
    margin: "8px",
  },
  extratwo: {
    margin: "8px",
    color: "red",
  },
}));

const SecondHeader = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={3}
      className={classes.container}
      direction="column"
    >
      <Grid item className={classes.paper} xs={12} sm={8}>
        <div className="firstHeading" spacing={2}>
          Who do you want to
        </div>
      </Grid>

      <Grid item className={classes.paper} xs={12} sm={8} spacing={4}>
        <div className="heading">
          <div className="extratwo">
            {" "}
            <h1> appreciate </h1>
          </div>
          <div className="extra">
            <h1>today?</h1>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default SecondHeader;
