import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // minHeight: "100vh",
  },
  errorText: {
    height: "40vh",
    width: "80vw",
    margin: "30vh auto",
  },
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.errorText}>
        <Typography variant="h3">404 Not Found!</Typography>
        <Typography va variant="body1">
          The page you requested couldn't be found.
        </Typography>
      </div>
    </div>
  );
};

export default NotFound;
