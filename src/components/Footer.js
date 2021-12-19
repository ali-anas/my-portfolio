import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import IconList from "./home/IconsList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "rgba(255, 255, 255, 0.72)",
  },
  footer: {
    padding: "24px",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={0} square className={classes.footer}>
        <IconList toAnimate={false} />
      </Paper>
      <div>
        <p>
          <i className="fa fa-copyright"></i> Copyright 2021 Anas Ali
        </p>
      </div>
    </div>
  );
};

export default Footer;
