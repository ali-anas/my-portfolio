import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import { sizing } from "@material-ui/system";
import { Link } from "react-router-dom";
import GoogleLogin, { GoogleLogout } from "react-google-login";

const useStyles = makeStyles((theme) => ({
  root: {
    top: "0",
    position: "sticky",
    transition: "top 300ms cubic-beizer(0.4, 0, 0.2, 1) 0ms",
    zIndex: "1100",
    backdropFilter: "blur(20px)",
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

const GOOGLE_CLIENT_ID =
  "750698082931-t38v1a4ilvtm9egdabpmp3sfn447r2k7.apps.googleusercontent.com";

const NavBar = () => {
  const classes = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (response) => {
    // handle click on login button
    console.log(response);
    setIsLoggedIn(true);
    console.log("in handle log in: ", isLoggedIn);
  };

  const handleLogout = () => {
    // handle click on logout button
    setIsLoggedIn(false);
    console.log("logged out...");
  };

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
          {isLoggedIn ? (
            <GoogleLogout
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Logout"
              onLogoutSuccess={handleLogout}
              onFailure={(err) => console.log(err)}
              theme="dark"
            />
          ) : (
            <GoogleLogin
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Login with Google"
              onSuccess={handleLogin}
              onFailure={(err) => console.log(err)}
              cookiePolicy={"single_host_origin"}
              theme="dark"
            />
          )}
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
