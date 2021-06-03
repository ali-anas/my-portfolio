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
  // primary = #08bd80;
  // white1 = #ededed
  // white2 = #f5f5f5
  // white3 = #f0f0f0
  // white4 - #f2f2f2
  // white5 = #f7f7f7
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
