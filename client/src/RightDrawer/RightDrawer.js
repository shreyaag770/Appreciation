import React from "react";

import { Grid } from "@material-ui/core";
import RightDrawerCard from "./RightDrawerCard";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
  root: {
    marginTop: "30px",
    color: "#1D72C0",
    fontFamily: "Poppins",
    fontWeight: "bold",
    textAlign: "left",
  },
  container: {
    textAlign: "left",
  }
});

const gridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left"
  },
  extrapaper: {
    padding: theme.spacing(0),
    textAlign: "left",
  },
}));

const RightDrawer = () => {
  const classes = useStyles();
  const classes1 = gridStyles();
  return (
    <div>
      <Grid container direction="column" className={classes1.root}>
        <Grid item container className={classes1.root}>
          <Grid item className={classes1.paper} xs={12} >
            <div className={classes.root}>
              <Typography variant="h6" gutterBottom>
                GROUPS
              </Typography>
            </div>
          </Grid>
          <Grid item sm={12} className={classes1.paper}>
            <RightDrawerCard title="Bundle Studio" subheader="143 members" />
          </Grid>
          <Grid item sm={12} className={classes1.paper}>
            <RightDrawerCard title="UX cose study" subheader="204 members" />
          </Grid>
          <Grid item className={classes1.paper} xs={12}>
            <div className={classes.root}>
              <Typography variant="h6" gutterBottom>
                ACTIVITY FEED
              </Typography>
            </div>
          </Grid>
          <Grid item container className={classes1.paper}>
            <Grid item xs={2} sm={2} className={classes1.extrapaper}>
              <Avatar alt="Remy Sharp" src="./assets/images/shreya.jpg" />
            </Grid>
            <Grid item xs={10} sm={10} className={classes1.extrapaper}>
              <Grid container direction="column">
                <Grid item sm={12} className={classes1.extrapaper}>
                  <Typography variant="button">PRATEEK GANDHI</Typography>
                </Grid>
                <Grid item className={classes1.extrapaper} sm={12}>
                  <RightDrawerCard
                    title="Hannah Geller"
                    subheader="Sameer and 23 others"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container className={classes1.paper}>
            <Grid item xs={2} sm={2} className={classes1.extrapaper}>
              <Avatar alt="Remy Sharp" src="./assets/images/shreya.jpg" />
            </Grid>
            <Grid item xs={10} sm={10} className={classes1.extrapaper}>
              <Grid container direction="column">
                <Grid item sm={12} className={classes1.extrapaper}>
                  <Typography variant="button">PRATEEK GANDHI</Typography>
                </Grid>
                <Grid item className={classes1.extrapaper} sm={12}>
                  <RightDrawerCard
                    title="Hannah Geller"
                    subheader="Sameer and 23 others"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container className={classes1.paper}>
            <Grid item xs={2} sm={2} className={classes1.extrapaper}>
              <Avatar alt="Remy Sharp" src="./assets/images/shreya.jpg" />
            </Grid>
            <Grid item xs={10} sm={10} className={classes1.extrapaper}>
              <Grid container direction="column">
                <Grid item sm={12} className={classes1.extrapaper}>
                  <Typography variant="button">PRATEEK GANDHI</Typography>
                </Grid>
                <Grid item className={classes1.extrapaper} sm={12}>
                  <RightDrawerCard
                    title="Hannah Geller"
                    subheader="Sameer and 23 others"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container className={classes1.paper}>
            <Grid item xs={2} sm={2} className={classes1.extrapaper}>
              <Avatar alt="Remy Sharp" src="./assets/images/shreya.jpg" />
            </Grid>
            <Grid item xs={10} sm={10} className={classes1.extrapaper}>
              <Grid container direction="column">
                <Grid item sm={12} className={classes1.extrapaper}>
                  <Typography variant="button">PRATEEK GANDHI</Typography>
                </Grid>
                <Grid item className={classes1.extrapaper} sm={12}>
                  <RightDrawerCard
                    title="Hannah Geller"
                    subheader="Sameer and 23 others"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default RightDrawer;
