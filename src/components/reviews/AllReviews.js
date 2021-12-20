import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import SingleReview from "./SingleReview";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { NewReview } from "./NewPostInput";
import { Link } from "react-router-dom";

import AuthButtonComponent from "../auth/AuthButtonComponent";

import { get, post } from "../../utilities";

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
  authComponent: {
    marginBottom: "var(--m)",
    display: "inline-flex",
    alignItems: "center",
  },
  askToLogin: {
    display: "flex",
    flexWrap: "noWrap",
    overflow: "hidden",
    textOverflow: "ellipses",
    height: "146px",
    // alignItems: "center",
    justifyContent: "center",
    fontSize: "var(--l)",
    margin: "0 var(--m)",
    marginBottom: "var(--m)",
    color: "var(--greenColor)",
  },
}));

const AllReviews = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([{}, {}, {}, {}]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (response) => {
    // handle click on login button
    console.log(response);

    setIsLoggedIn(true);
    const userToken = response.tokenObj.id_token;
    post("/auth/login", { token: userToken }).then((user) => {
      // the server knows we're logged in now
      console.log(user);
    });
  };

  const handleLogout = () => {
    // handle click on logout button
    setIsLoggedIn(false);
    console.log("logged out...");
    post("/auth/logout");
  };

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

  const hasReviews = data.length !== 0;
  return (
    <div className={classes.root}>
      <div>
        <div className={classes.authComponent}>
          <AuthButtonComponent
            isLoggedIn={isLoggedIn}
            handleLogin={handleLogin}
            handleLogout={handleLogout}
          />
        </div>
        {isLoggedIn ? (
          <NewReview addNewReview={addNewReview} />
        ) : (
          <div className={classes.askToLogin}>
            <p>Login/Signup with Google to add your review!</p>
          </div>
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
