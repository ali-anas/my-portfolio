import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { post } from "../../utilities";
import {
  ContactSupportOutlined,
  ControlPointDuplicateRounded,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexDirection: "column",
    marginBottom: "var(--m)",
  },
  formClass: {
    width: "90vw",
    [theme.breakpoints.up("sm")]: {
      width: "60vw",
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function NewPostInput(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const [hasError, setHasError] = React.useState(false);

  const handleChange = (event) => {
    if (hasError) {
      setHasError(false);
    }
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!String.prototype.trim) {
      String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, "");
      };
    }
    let ans = value.trim();
    if (!ans) {
      setHasError(true);
      setValue("");
      return;
    }

    let arr = ans.split("\n");
    // console.log(arr);
    props.onSubmit && props.onSubmit(arr);
    setValue("");
  };

  return (
    <div className={classes.root}>
      <form noValidate autoComplete="off">
        <TextField
          error={hasError}
          className={classes.formClass}
          id="outlined-multiline-static"
          label={props.defaultText}
          multiline
          rows={3}
          value={value}
          helperText={hasError ? "Must not be empty" : ""}
          onChange={handleChange}
          variant="outlined"
        />
      </form>
      <div>
        <Button
          disabled={value ? false : true}
          className={classes.button}
          onClick={handleSubmit}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

function NewReview(props) {
  const addReview = (valueArr) => {
    const body = { content: valueArr };
    post("/reviews", body).then((review) => {
      props.addNewReview(review);
    });
  };

  return <NewPostInput defaultText="Add Review" onSubmit={addReview} />;
}

export { NewPostInput, NewReview };
