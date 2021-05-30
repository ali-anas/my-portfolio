import React from "react";
import Divider from "@material-ui/core/Divider";
import TabbedLayout from "../home/TabbedLayout";
import IntroBanner from "../home/IntroBanner";
import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  divider: {
    margin: "20px 10%",
    color: "red",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <IntroBanner />
        {/* <Divider variant="middle" classNames={classes.divider} /> */}
        <TabbedLayout />
      </Container>
    </div>
  );
};
export default Home;
