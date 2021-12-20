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
    top: "0",
    position: "sticky",
    transition: "top 300ms cubic-beizer(0.4, 0, 0.2, 1) 0ms",
    zIndex: "1100",
    backdropFilter: "blur(10px)",
    boxShadow: "inset 0px -1px 1px #eaeef3",
    backgroundColor: "rgba(255, 255, 255, 0.72)",
  },
  navItem: {
    justifyContent: "flex-end",
    textDecoration: "none",
    height: "100%",
  },
  navButton: {
    height: "100%",
    borderRadius: "0px",
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 4),
    },
  },
  toolbar: {
    height: 60,
    minHeight: 60,
    padding: theme.spacing(0),
    // backgroundColor: "#2196f3",
  },
  brand: {
    color: "black",
    height: "100%",
    marginRight: "auto",
    fontWeight: "bold",
    textDecoration: "none",
    fontSize: "large",
    letterSpacing: "0.1em",
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="transparent" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.brand}>
            <Button className={classes.navButton}>
              Anas Ali
              {/* </Button> */}
            </Button>
          </Link>

          {/* <Link to="/blogs" className={classes.navItem}>
            <Button size="medium" className={classes.navButton}>
              Blogs
            </Button>
          </Link> */}
          <Link to="/reviews" className={classes.navItem}>
            <Button size="medium" className={classes.navButton}>
              Reviews
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
