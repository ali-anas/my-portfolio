import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

import SkillBox from "./SkillBox";
import SingleSkill from "./SingleSkill";
import { get } from "../../utilities";
import { CenterFocusStrong } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {},
  progressBar: {
    marginTop: "100px",
    alignItems: "center",
  },
  skillsGrid: {
    paddingTop: theme.spacing(4),
    justifyContent: "center",
  },
  skillBox: {
    width: "40%",
    flex: "1 0 auto",
    margin: theme.spacing(0, 4, 6, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "20px",
    backgroundColor: "white",
    boxShadow: "0px 16px 32px 0px rgba(221, 230, 237, 0.4)",
    padding: theme.spacing(0, 2, 2, 2),
  },
  skillHeader: {
    position: "relative",
    top: "-20px",
    width: "80%",

    textAlign: "center",
    justifyContent: "center",
    padding: theme.spacing(1, 2),
    borderRadius: theme.spacing(1),
    top: "-16px",
    backgroundColor: "white",
    boxShadow: "0px 16px 16px 0px rgba(221, 230, 237, 0.4)",
  },
  skillHeaderText: {
    margin: "0px",
    fontSize: theme.spacing(3),
    color: "#08bd80",
    fontWeight: "700",
    fontFamily: "Product-Sans",
    fontWeight: 500,
  },
  skillList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "white",
  },
  skillItem: {
    margin: theme.spacing(2, 1),
    padding: theme.spacing(2),
    borderRadius: "30px",
    // width: "justifyContent",
    backgroundColor: "transparent",
    color: "black",
    fontSize: "0.875rem",
    boxShadow: "0px 5px 20px -10px #08bd80",
  },
}));

const Skills = () => {
  const classes = useStyles();
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    get("/skills").then((skillsResponse) => {
      console.log(skillsResponse.skills);
      setSkills(skillsResponse.skills);
      setLoading(false);
    });
  }, []);

  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h4">Skills</Typography>
      </div>
      {loading ? (
        <div className={classes.progressBar}>
          <CircularProgress />
        </div>
      ) : (
        <div>
          <Grid container className={classes.skillsGrid}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} className={classes.skillBox}>
                {/* <SingleSkill skill={skill} /> */}
                {/* <div className={classes.newDiv}> */}
                <div className={classes.skillHeader}>
                  <span className={classes.skillHeaderText}>
                    {skill.categoryTitle}
                  </span>
                </div>
                <div className={classes.skillList}>
                  {skill.skillItems.map((s, index) => (
                    <div className={classes.skillItem}>{s}</div>
                  ))}
                </div>
                {/* </div> */}
              </Grid>
            ))}
          </Grid>
        </div>
      )}
      {/* <SkillBox loading={loading} skills={skills} /> */}
      {/* ) */}
    </div>
  );
};

export default Skills;
