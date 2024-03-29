import React from "react";
import TabbedNav from "./TabbedNav";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh",
  },
}));

const TabbedLayout = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TabbedNav />
    </div>
  );
};

export default TabbedLayout;
