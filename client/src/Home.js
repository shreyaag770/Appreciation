import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./Headers/Header";
import Content from "./Main/Content";
import { makeStyles } from "@material-ui/core/styles";
import FirstHeader from "./Headers/FirstHeader";
import SecondHeader from "./Headers/SecondHeader";
import RightDrawer from "./RightDrawer/RightDrawer";
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.root} direction="column" xs={12}>
        <Grid item container xs={12} >
          <Grid item className={classes.paper}  sm={1}>
          <Hidden only="xs">
            <Header />
            </Hidden>

          </Grid>
          <Grid item className={classes.paper} xs={12} sm={6} md={8} spacing={2}>
            <Grid
              container
              className={classes.root}
              direction="column"
              spacing={5} xs={12}
            >
              <Grid item xs={12} sm={12} spacing={2}>
                
                <FirstHeader />
              </Grid>
              <Grid item xs={12} sm={12} spacing={2}>
                
                <SecondHeader />
              </Grid>
              <Grid item xs={12} sm={12} spacing={2}>
                
                <Content />
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.paper} xs={12} sm={5} md={3}>
            <RightDrawer />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
