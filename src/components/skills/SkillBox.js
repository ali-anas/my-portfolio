import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { PinDropSharp } from "@material-ui/icons";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  skillBox: {
    height: "100%",
  },
  paper: {
    minHeight: "100px",
    margin: theme.spacing(2),
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
  },
}));

export default function SkillBox({ loading, skills }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={6} className={classes.skillBox}>
          {loading ? (
            <Skeleton
              animation="wave"
              variant="rect"
              className={classes.paper}
            />
          ) : (
            <Paper square elevation={0} className={classes.paper}></Paper>
          )}
        </Grid>
        <Grid item xs={12} sm={6} className={classes.skillBox}>
          {loading ? (
            <Skeleton
              animation="wave"
              variant="rect"
              className={classes.paper}
            />
          ) : (
            <Paper square elevation={0} className={classes.paper}></Paper>
          )}
        </Grid>
        <Grid item xs={12} sm={6} className={classes.skillBox}>
          {loading ? (
            <Skeleton
              animation="wave"
              variant="rect"
              className={classes.paper}
            />
          ) : (
            <Paper square elevation={0} className={classes.paper}></Paper>
          )}
        </Grid>
        <Grid item xs={12} sm={6} className={classes.skillBox}>
          {loading ? (
            <Skeleton
              animation="wave"
              variant="rect"
              className={classes.paper}
            />
          ) : (
            <Paper square elevation={0} className={classes.paper}></Paper>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
