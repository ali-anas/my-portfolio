import React from "react";
import "./ProfileAvatar.css";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    avatarContainer: {
        padding: "0 30%",
        [theme.breakpoints.up('md')]: {
            padding: "0 0 0 25%",
          },
    },
  }));

const ProfileAvatar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.avatarContainer}>
                <div className="Profile-avatar" />
            </div>
        </div>
    )
}

export default ProfileAvatar;