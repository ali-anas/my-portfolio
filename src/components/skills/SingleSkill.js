import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { ListItem } from "@material-ui/core";
import { NoEncryption } from "@material-ui/icons";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    // boxShadow:
    //   "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
    // boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
    // boxShadow: "0px 16px 32px 0px rgba(221, 230, 237, 0.4)",
    // borderRadius: "20px",
    // boxShadow: "0px 16px 32px 0px rgba(221, 230, 237, 0.4)",
    // borderRadius: "20px",
    padding: theme.spacing(0, 2, 2, 2),
    backgroundColor: "white",
    flex: "1 0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  skillHeader: {
    width: "60%",
    backgroundColor: "white",
    textAlign: "center",
    justifyContent: "center",
    padding: theme.spacing(1, 2),
  },
  skillHeaderText: {
    margin: "0px",
    fontSize: theme.spacing(3),
  },
  skillList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  skillItem: {
    margin: theme.spacing(2, 1),
    padding: theme.spacing(2),
    borderRadius: "30px",
    width: "justifyContent",
    // backgroundColor: "#08bd80",
    color: "white",
    fontSize: "12px",
    boxShadow: "0px 5px 20px -10px #08bd80",
  },
}));

const SingleSkill = ({ skill }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.skillHeader}>
        <span className={classes.skillHeaderText}>{skill.categoryTitle}</span>
      </div>
      <div className={classes.skillList}>
        {/* <ul className={classes.listType}>
          {skill.skillItems.map((s, index) => (
            <li key={index}>
              <div className={classes.item}>{s}</div>
            </li>
          ))}
        </ul> */}
        {skill.skillItems.map((s, index) => (
          <div className={classes.skillItem}>{s}</div>
        ))}
      </div>
    </div>
  );
};

export default SingleSkill;
