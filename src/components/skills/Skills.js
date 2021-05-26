import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

import SkillBox from "./SkillBox";
import { get } from "../../utilities";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  progressBar: {
    marginTop: "100px",
    alignItems: "center",
  },
});

const Skills = () => {
  const classes = useStyles();
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    get("/skills").then((skillsResponse) => {
      // console.log(skillsResponse.skills);
      setSkills(skillsResponse.skills);
      setLoading(false);
    });
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h4">Skills</Typography>
      {/* {loading ? (
        <div className={classes.progressBar}>
          <CircularProgress />
        </div>
      ) : ( */}
      <SkillBox loading={loading} skills={skills} />
      {/* } */}
    </div>
  );
};

export default Skills;
