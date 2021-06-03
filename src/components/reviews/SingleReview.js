import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Skeleton from "@material-ui/lab/Skeleton";
import { LinkedIn } from "@material-ui/icons";
import { Fade } from "@material-ui/core";

import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "40vw",
    textAlign: "left",
    padding: theme.spacing(1, 2),
    // boxShadow:
    //   "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
    // boxShadow:
    //   "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px", //18
    // boxShadow: "rgba(0, 0, 0, 0.1) -4px 9px 25px -6px",
    boxShadow: "0px 16px 32px 0px rgba(221, 230, 237, 0.4)",
  },
  reviewContent: {
    padding: theme.spacing(1),
  },
  reviewHeader: {
    display: "flex",
  },
  icon: {
    marginLeft: "auto",
    height: "inherit",
  },
  reviewHeadline: {
    height: "100%",
    margin: theme.spacing(0, 1),
  },
  sentenceMargin: {
    marginBottom: theme.spacing(1),
  },
}));

/**
 * SingleReview is a component that renders creator and content of a Single review.
 *
 * Proptypes
 * @param {string} _id of the story
 * @param {string} creator_name
 * @param {string} content of the story
 */

const SingleReview = ({ loading, data }) => {
  console.log(data.content);
  const classes = useStyles();
  return (
    <Fade in={true} style={{ transformOrigin: "0 0 0" }} {...{ timeout: 1000 }}>
      <Card className={classes.root} rounded elevation={0}>
        <CardHeader
          avatar={
            loading ? (
              <Skeleton
                animation="wave"
                variant="circle"
                width={40}
                height={40}
              />
            ) : (
              <Avatar alt="Ted talk" src="" />
            )
          }
          action={
            loading ? (
              <Skeleton
                animation="wave"
                height={20}
                variant="rect"
                width={20}
              />
            ) : (
              <IconButton aria-label="settings">
                <LinkedInIcon color="primary" />
              </IconButton>
            )
          }
          title={
            loading ? (
              <Skeleton
                animation="wave"
                height={16}
                width="80%"
                style={{ marginBottom: 8 }}
              />
            ) : (
              data.name
            )
          }
          subheader={
            loading ? (
              <Skeleton animation="wave" height={14} width="40%" />
            ) : (
              data.designation
            )
          }
        />

        <CardContent>
          {loading ? (
            <React.Fragment>
              <Skeleton
                animation="wave"
                height={16}
                style={{ marginBottom: 8 }}
              />
              <Skeleton
                animation="wave"
                height={16}
                style={{ marginBottom: 8 }}
              />
              <Skeleton animation="wave" height={16} width="80%" />
            </React.Fragment>
          ) : (
            data.content.map((sentence, index) => (
              <Typography
                key={index}
                variant="body1"
                component="p"
                className={classes.sentenceMargin}
              >
                {sentence}
              </Typography>
            ))
          )}
        </CardContent>
      </Card>
    </Fade>
  );
};

SingleReview.propTypes = {
  loading: PropTypes.bool,
};

export default SingleReview;
