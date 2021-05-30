import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { sizing } from "@material-ui/system";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  // navItem: {
  //   marginRight: theme.spacing(4),
  // },
  margin: {
    padding: theme.spacing(0, 4),
    height: "100%",
    borderRadius: "0",
  },
  navItem: {
    justifyContent: "flex-end",
    padding: theme.spacing(0, 2),
  },
  toolbar: {
    height: 50,
    minHeight: 50,
    padding: theme.spacing(0),
    // backgroundColor: "#2196f3",
  },
  brand: {
    marginLeft: theme.spacing(2),
    marginRight: "auto",
    fontSize: "24px",
    fontWeight: "bold",
    height: "100%",
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="transparent">
        <Toolbar className={classes.toolbar}>
          <div className={classes.brand}>
            <Link to="/" style={{ textDecoration: "none" }}>
              Anas Ali
              {/* </Button> */}
            </Link>
          </div>
          <div className={classes.navItem}>
            <Link to="/reviews" style={{ textDecoration: "none" }}>
              Reviews
            </Link>
          </div>
          <div className={classes.navItem}>
            <Link to="/blogs" style={{ textDecoration: "none" }}>
              Blogs
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
