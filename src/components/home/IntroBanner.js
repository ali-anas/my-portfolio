import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconsList from "./IconsList";
import Avatar from "@material-ui/core/Avatar";

import ProfileAvatar from "../ProfileAvatar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh",
    // backgroundColor: "#2196f3",
    // background: "linear-gradient(180deg, #05f, #09f)",
  },
  bannerContent: {
    height: "60vh",
    padding: "20vh 0",
  },
  introText: {
    color: "black",
    fontSize: "1.25rem",
    margin: theme.spacing(0),
  },
  name: {
    fontSize: "calc(4em + 2vw)",
    fontFamily: "Product-Sans",
    color: "#08bd80",
    fontWeight: "600",
  },
}));

export default function IntroBanner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.bannerContent}>
        {/* <ProfileAvatar /> */}
        <div className={`${"animateBanner"} ${"pop"}`}>
          <Typography className={classes.name}>Anas Ali.</Typography>
        </div>
        <div className={`${"animateBanner"} ${"pop"} ${"delay-first"}`}>
          <Typography className={classes.introText}>
            A learner and a competitive programmer.
          </Typography>
        </div>
        <div className={`${"animateBanner"} ${"pop"} ${"delay-first"}`}>
          <IconsList />
        </div>
      </div>
    </div>
  );
}
