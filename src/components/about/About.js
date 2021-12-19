import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Fade, Zoom } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  itemsCenter: {
    alignItems: "center",
    fontFamily: "ProductSans",
  },
  gridSection: {
    textAlign: "left",
    padding: "8px",
  },
  educationBox: {
    margin: "0px 32px",
  },
});

const About = () => {
  const classes = useStyles();
  // const [loading, setLoading] = useState(true);
  // const [data, setData] = useState("");
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //     setData(
  //       "ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye ye "
  //     );
  //   }, 5000);
  // }, []);
  return (
    <div className={classes.root}>
      <Typography variant="h4">About</Typography>
      <Grid container className={classes.skillsGrid}>
        <Zoom in={true}>
          <Grid item xs={12} sm={6} className={classes.gridSection}>
            {/* <Fade
            in={true}
            style={{ transformOrigin: "0 0 0" }}
            {...{ timeout: 1000 }}
            disableStrictModeCompat
          > */}

            {/* <Paper elevation={0} className={classes.itemsCenter}> */}
            <Typography variant="body1">
              Hi, I'm Anas, a student and an aspiring software developer who
              loves building web products and solving coding problems. I
              Recently developed a personal portfolio website using ReactJS and
              NodeJS. I'd love to combine my passion for learning and solving
              problem with my software development skills to continue building
              personalized products for peoples and organizations.
            </Typography>
            {/* </Paper> */}

            {/* </Fade> */}
          </Grid>
        </Zoom>
        <Zoom in={true} style={{ transitionDelay: "500ms" }}>
          <Grid item xs={12} sm={6} className={classes.gridSection}>
            <div className={classes.educationBox}>
              <Typography variant="h5">Education</Typography>
              <div>
                <ul>
                  <li>Bipin Tripathi Kumaon Institute Of Technology</li>
                  <li>JNV Almora</li>
                </ul>
              </div>
            </div>
          </Grid>
        </Zoom>
      </Grid>
    </div>
  );
};

export default About;
