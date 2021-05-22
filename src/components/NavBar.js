import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    navContainer: {
      display: 'flex',
    },
    navItem: {
      marginRight: theme.spacing(4),
    }
  }));


const NavBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar color="primary" position="sticky">
                <Toolbar>
                    <div className={classes.navContainer}>
                        <Typography edge="start" variant="h6" className={classes.navItem}>
                            GReviews
                        </Typography>
                        {/* <Typography variant="h4" className={classes.navItem}>
                            Anas Ali
                        </Typography> */}
                        <Typography edge="end" variant="h6" className={classes.navItem}>
                            Blogs
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;