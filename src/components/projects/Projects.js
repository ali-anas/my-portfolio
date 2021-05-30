import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";
import CircularProgress from "@material-ui/core/CircularProgress";

import ImgMediaCard from "./ImgMediaCard";
import { get } from "../../utilities";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  progressBar: {
    marginTop: "100px",
    alignItems: "center",
  },
  center: {
    textAlign: "center",
  },
});

function FetchProjects({ projects, setProjects }) {}

const Projects = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([{}, {}, {}, {}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    get("/projects").then((projectsObj) => {
      setProjects(projectsObj);
      setLoading(false);
    });
  }, []);

  const hasProjects = projects.length !== 0;

  return (
    <div className={classes.root}>
      <Typography variant="h4">Projects</Typography>

      <Grid container>
        {projects.map((projectObjs) => (
          <Grid key={projectObjs.id} item xs={12} sm={6}>
            <ImgMediaCard loading={loading} project={projectObjs} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
