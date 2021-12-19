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
    // backgroundColor: "#08bd80"
    // [theme.breakpoints.up("md")]: {
    //   justifyContent: "start",
    // },
    "& > *": {
      margin: theme.spacing(2),
      cursor: "pointer",
    },
  },
}));

export default function IconsList({ toAnimate }) {
  const classes = useStyles();
  const data = [<LinkedIn />, <Email />, <Github />, <Print />];

  return (
    <div className={classes.root}>
      {data.map((comp, index) => (
        <div
          className={`${toAnimate ? "animateIconList" : ""} ${
            toAnimate ? "glow" : ""
          } ${toAnimate ? `delay-${Number(index)}` : ""}`}
        >
          {comp}
        </div>
      ))}
    </div>
  );
}
