import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { post } from "../../utilities";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexDirection: "column",
  },
  formResize: {
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

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let arr = value.split("\n");
    console.log(arr);
    props.onSubmit && props.onSubmit(arr);
    setValue("");
  };

  return (
    <div className={classes.root}>
      <form noValidate autoComplete="off">
        <TextField
          className={classes.formResize}
          id="outlined-multiline-static"
          label={props.defaultText}
          multiline
          rows={3}
          value={value}
          onChange={handleChange}
          variant="outlined"
        />
      </form>
      <div>
        <Button
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

  return <NewPostInput defaultText="New Review" onSubmit={addReview} />;
}

export { NewPostInput, NewReview };
