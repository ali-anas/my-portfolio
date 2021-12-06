import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Fade } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  itemsCenter: {
    alignItems: "center",
    fontFamily: "ProductSans",
  },
});

const About = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setData(
        "ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye "
      );
    }, 5000);
  }, []);
  return (
    <div className={classes.root}>
      <Fade
        in={true}
        style={{ transformOrigin: "0 0 0" }}
        {...{ timeout: 1000 }}
        disableStrictModeCompat
      >
        <Paper elevation={0} className={classes.itemsCenter}>
          <Typography variant="h4">About</Typography>
          <Typography variant="body1">
            {data}
            {/* Determines additional display behavior of the tabs: - scrollable
            will invoke scrolling properties and allow for horizontally
            scrolling (or swiping) of the tab bar. -fullWidth will make the tabs
            grow to use all the available space, which should be used for small
            views, like on mobile. - standard will render thDetermines
            additional display behavior of the tabs: - scrollable will invoke
            scrolling properties and allow for horizontally scrolling (or
            swiping) of the tab bar. -fullWidth will make the tabs grow to use
            all the available space, which should be used for small views, like
            on mobile. - standard will render the default state.e default state.
            Determines additional display behavior of the tabs: - scrollable
            will invoke scrolling properties and allow for horizontally
            scrolling (or swiping) of the tab bar. -fullWidth will make the tabs
            grow to use all the available space, which should be used for small
            views, like on mobile. - standard will render the default state.
            Determines additional display behavior of the tabs: - scrollable
            will invoke scrolling properties and allow for horizontally
            scrolling (or swiping) of the tab bar. -fullWidth will make the tabs
            grow to use all the available space, which should be used for small
            views, like on mobile. - standard will render the default state. */}
          </Typography>
        </Paper>
      </Fade>
    </div>
  );
};

export default About;
