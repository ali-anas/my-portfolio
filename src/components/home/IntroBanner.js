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
    backgroundColor: "#2196f3",
  },
  bannerContent: {
    height: "60vh",
    padding: "20vh 0",
  },
  name: {
    fontSize: "calc(2em + 2vw)",
  },
}));

export default function IntroBanner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.bannerContent}>
        <ProfileAvatar />
        <div>
          <Typography className={classes.name}>Anas Ali</Typography>
        </div>
        <div>
          <IconsList />
        </div>
      </div>
    </div>
  );
}
