import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconsList from "./IconsList";

import ProfileAvatar from "../ProfileAvatar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  textHeader: {
    marginTop: "20px",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
  textIntro: {
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
  textContainer: {
    padding: "0",
    [theme.breakpoints.up("md")]: {
      paddingLeft: "10%",
    },
  },
  iconsList: {
    margin: "0xp auto",
    [theme.breakpoints.up("md")]: {
      margin: "0px",
    },
  },
}));

export default function IntroBanner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={3}>
          <ProfileAvatar />
        </Grid>
        <Grid item xs={12} md={9}>
          <div className={classes.textContainer}>
            <Typography
              variant="h3"
              color="primary"
              className={classes.textHeader}
            >
              Anas Ali
            </Typography>
            <Typography className={classes.textIntro}>
              I AM FINAL YEAR UNDERGRADUATE STUDENT AT BTKIT.
            </Typography>
            <div>
              <IconsList />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
