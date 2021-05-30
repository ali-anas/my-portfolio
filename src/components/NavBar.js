import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import { sizing } from "@material-ui/system";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navItem: {
    justifyContent: "flex-end",
    textDecoration: "none",
    height: "100%",
  },
  navButton: {
    height: "100%",
    padding: theme.spacing(0, 4),
    borderRadius: 0,
  },
  toolbar: {
    height: 50,
    minHeight: 50,
    padding: theme.spacing(0),
    // backgroundColor: "#2196f3",
  },
  brand: {
    color: "black",
    height: "100%",
    marginRight: "auto",
    fontWeight: "bold",
    textDecoration: "none",
    fontSize: "larger",
    letterSpacing: "0.1em",
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="transparent">
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.brand}>
            <Button className={classes.navButton}>
              Anas Ali
              {/* </Button> */}
            </Button>
          </Link>

          <Link to="/reviews" className={classes.navItem}>
            <Button size="medium" className={classes.navButton}>
              Reviews
            </Button>
          </Link>

          <Link to="/blogs" className={classes.navItem}>
            <Button size="medium" className={classes.navButton}>
              Blogs
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
