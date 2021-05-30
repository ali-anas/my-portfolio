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
    width: "100vw",
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
      setData(response.reviews);
      setLoading(false);
    });
  }, []);

  const hasReviews = data.length !== 0;
  return (
    <div className={classes.root}>
      <NewReview />
      {hasReviews ? (
        <Grid container>
          {data.map((dataObjs, index) => (
            <Grid key={dataObjs.id} item xs={12} className={classes.reviewBox}>
              <SingleReview loading={loading} data={dataObjs} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h3">No Responses!</Typography>
      )}
    </div>
  );
};

export default AllReviews;
