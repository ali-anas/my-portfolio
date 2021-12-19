import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import SingleReview from "./SingleReview";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { NewReview } from "./NewPostInput";
import { Link } from "react-router-dom";

import { get } from "../../utilities";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "var(--m) auto",
    [theme.breakpoints.up("sm")]: {
      width: "60vw",
    },
  },
  reviewBox: {
    height: "100%",
    margin: theme.spacing(2),
  },
  loginDiv: {
    // display: "flex",
    // flexDirection: "row",
    // flexWrap: "noWrap",
    margin: "0px var(--m)",
    textAlign: "center",
    width: "min-content",
  },
  loginAndAddReviewDiv: {
    display: "flex",
    height: "160px",
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "noWrap",
    overflow: "hidden",
    textOverflow: "ellipses",
    margin: "0px",
    border: "2px solid var(--greenColor)",
    borderRadius: "var(--s)",
    padding: "0px",
    cursor: "pointer",
    fontSize: "var(--m)",
    [theme.breakpoints.up("sm")]: {
      fontSize: "var(--l)",
    },

    fontFamily: "Product-Sans",
    letterSpacing: "0.25px",
    boxShadow: "0px 10px 20px -5px lightGrey",
  },
  buttonText: {
    padding: "var(--s) var(--m)",
    color: "var(--white)",
    backgroundColor: "var(--greenColor)",
  },
  buttonIcon: {
    padding: "var(--s) var(--m)",
    backgroundColor: "var(--white)",
    color: "var(--greenColor)",
  },
  loginLink: {
    textDecoration: "none",
  },
}));

const AllReviews = () => {
  const classes = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([{}, {}, {}, {}]);

  useEffect(() => {
    get("/reviews").then((response) => {
      let reversedResponse = response.reviews.reverse();
      setData(reversedResponse);
      setLoading(false);
    });
  }, []);

  const addNewReview = (reviewObj) => {
    setData([reviewObj].concat(data));
  };

  const handleLoginClick = () => {
    // get("http://localhost:3000/auth/linkedin").then((res) => {
    //   console.log(res);
    // });
    // setIsLoggedIn(true);
  };

  const hasReviews = data.length !== 0;
  return (
    <div className={classes.root}>
      <div className={classes.loginAndAddReviewDiv}>
        {!isLoggedIn ? (
          <div className={classes.loginDiv}>
            <button className={classes.loginButton}>
              <span className={classes.buttonIcon}>
                <i className="fa fa-google"></i>
              </span>
              <div className={classes.buttonText}>Login/Signup</div>
            </button>
            <p>Login or Signup to add your review!</p>
          </div>
        ) : (
          <NewReview addNewReview={addNewReview} />
        )}
      </div>
      {hasReviews ? (
        <Grid container>
          {data.map((dataObjs, index) => (
            <Grid key={dataObjs.id} item xs={12} className={classes.reviewBox}>
              <SingleReview loading={loading} data={dataObjs} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <React.Fragment>
          <Typography variant="h3">No Reviews Yet!</Typography>
          <Typography variant="h5">Add your Review</Typography>
        </React.Fragment>
      )}
    </div>
  );
};

export default AllReviews;
