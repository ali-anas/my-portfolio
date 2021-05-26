import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { sizing } from "@material-ui/system";
import Button from "@material-ui/core/Button";

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
  navItems: {
    justifyContent: "flex-end",
  },
  toolbar: {
    height: 50,
    minHeight: 50,
    padding: theme.spacing(0),
    // backgroundColor: "#2196f3",
  },
  brand: {
    marginRight: "auto",
    fontSize: "24px",
    fontWeight: "bold",
    height: "100%",
    borderRadius: "0",
    padding: theme.spacing(0, 4),
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="transparent">
        <Toolbar className={classes.toolbar}>
          <Button size="large" className={classes.brand}>
            Anas Ali
          </Button>
          <Button size="medium" className={classes.margin}>
            Reviews
          </Button>
          <Button size="medium" disabled className={classes.margin}>
            Blogs
          </Button>

          {/* <Typography edge="start" variant="h6" className={classes.navItem}>
            GReviews
          </Typography> */}
          {/* <Typography variant="h4" className={classes.navItem}>
                            Anas Ali
                        </Typography> */}
          {/* <Typography edge="end" variant="h6" className={classes.navItem}>
            Blogs
          </Typography> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
