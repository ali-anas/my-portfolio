import React from "react";
import "./ProfileAvatar.css";
import { makeStyles } from "@material-ui/core/styles";
// import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    width: "200px",
    height: "200px",
    overflow: "hidden",
    borderRadius: "50%",
    margin: "0 auto",
  },
}));

const ProfileAvatar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <Skeleton variant="circle" className={classes.root} /> */}
      <div className="Profile-avatar" />
    </div>
  );
};

export default ProfileAvatar;
