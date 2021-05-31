import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import SingleReview from "./SingleReview";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { NewReview } from "./NewPostInput";

import { get } from "../../utilities";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "90vw",
    margin: "10vh auto",
    [theme.breakpoints.up("sm")]: {
      width: "60vw",
    },
  },
  reviewBox: {
    height: "100%",
    margin: theme.spacing(2),
  },
}));

const AllReviews = () => {
  const classes = useStyles();
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

  const hasReviews = data.length !== 0;
  return (
    <div className={classes.root}>
      <NewReview addNewReview={addNewReview} />
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
          <Typography variant="h3">No Responses Yet!</Typography>
          <Typography variant="h5">Add your Review</Typography>
        </React.Fragment>
      )}
    </div>
  );
};

export default AllReviews;
