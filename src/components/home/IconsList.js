import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import LinkedIn from "../icons/LinkedIn";
import Email from "../icons/Email";
import Github from "../icons/Github";
import Print from "../icons/Print";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    // [theme.breakpoints.up("md")]: {
    //   justifyContent: "start",
    // },
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function IconsList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinkedIn />
      <Github />
      <Email />
      <Print />
    </div>
  );
}
