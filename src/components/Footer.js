import React from "react";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    footer: {
        padding: "100px",
    },
  }));

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.footer}>
            </Paper>
        </div>
        
    )
}

export default Footer;