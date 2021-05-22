import React from "react";
import Paper from '@material-ui/core/Paper';
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
});

const Projects = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h4">
                Projects
            </Typography>
            <Typography>
            Determines additional display behavior of the tabs:
            - scrollable will invoke scrolling properties and allow for 
            horizontally scrolling (or swiping) of the tab bar. -fullWidth 
            will make the tabs grow to use all the available space, 
            which should be used for small 
            views, like on mobile. - standard will render the default state.
            </Typography>
        </div>
    );
}

export default Projects;