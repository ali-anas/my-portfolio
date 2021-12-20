import GoogleLogin, { GoogleLogout } from "react-google-login";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  loginButton: {
    display: "flex",
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "noWrap",
    overflow: "hidden",
    textOverflow: "ellipses",
    margin: "0px",
    border: "2px solid var(--greenColor)",
    borderRadius: "var(--s)",
    padding: "0px",
    cursor: "pointer",
    fontSize: "var(--m)",
    // [theme.breakpoints.up("sm")]: {
    //   fontSize: "var(--l)",
    // },

    fontFamily: "Product-Sans",
    letterSpacing: "0.25px",
    boxShadow: "0px 10px 20px -5px lightGrey",
  },
  buttonText: {
    padding: "var(--s) var(--m)",
    color: "var(--white)",
    backgroundColor: "var(--greenColor)",
    width: "130px",
  },
  buttonIcon: {
    padding: "var(--s) var(--m)",
    backgroundColor: "var(--white)",
    color: "var(--greenColor)",
  },
  loginLink: {
    textDecoration: "none",
  },
}));

const GOOGLE_CLIENT_ID =
  "750698082931-t38v1a4ilvtm9egdabpmp3sfn447r2k7.apps.googleusercontent.com";

const AuthButtonComponent = ({ isLoggedIn, handleLogin, handleLogout }) => {
  const classes = useStyles();
  return (
    <>
      {isLoggedIn ? (
        <GoogleLogout
          clientId={GOOGLE_CLIENT_ID}
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              className={classes.loginButton}
            >
              <span className={classes.buttonIcon}>
                <i className="fa fa-google"></i>
              </span>
              <div className={classes.buttonText}>Logout</div>
            </button>
          )}
          onLogoutSuccess={() => handleLogout()}
          onFailure={(err) => console.log(err)}
        />
      ) : (
        // <GoogleLogin
        //   clientId={GOOGLE_CLIENT_ID}
        //   buttonText="Login with Google"
        //   onSuccess={(response) => handleLogin(response)}
        //   onFailure={(err) => console.log(err)}
        //   cookiePolicy={"single_host_origin"}
        //   style={buttonStyle}
        // />
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              className={classes.loginButton}
            >
              <span className={classes.buttonIcon}>
                <i className="fa fa-google"></i>
              </span>
              <div className={classes.buttonText}>Login/Signup</div>
            </button>
          )}
          buttonText="Login"
          onSuccess={(response) => handleLogin(response)}
          onFailure={(err) => console.log(err)}
        />
      )}
    </>
  );
};

export default AuthButtonComponent;
