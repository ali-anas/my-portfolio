import React from "react";
import AllReviews from "../reviews/AllReviews";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh",
  },
}));

const Reviews = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AllReviews />
    </div>
  );
};

export default Reviews;
