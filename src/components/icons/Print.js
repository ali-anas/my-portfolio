import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#08bd80",
    fontSize: "1.25em",
    [theme.breakpoints.up("md")]: {
      fontSize: "2.5em",
    },
  },
  iconDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "1em",
    width: "1em",
    [theme.breakpoints.up("md")]: {
      height: "2em",
      width: "2em",
    },

    padding: theme.spacing(2),
    borderRadius: "50%",
    backgroundColor: "white",
    boxShadow: "0px 16px 32px 0px rgba(221, 230, 237, 0.4)",
  },
}));

const Print = () => {
  const classes = useStyles();
  return (
    <>
      <Tooltip title="Resume" arrow>
        <div className={classes.iconDiv}>
          <i className={`${"fa fa-print"} ${classes.root}`}></i>
        </div>
      </Tooltip>
    </>
  );
};

export default Print;
