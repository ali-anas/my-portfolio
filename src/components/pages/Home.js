import React from "react";
import Divider from "@material-ui/core/Divider";
import TabbedLayout from "../home/TabbedLayout";
import IntroBanner from "../home/IntroBanner";

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
  return (
    <>
      <IntroBanner />
      <Divider variant="middle" className={classes.divider} />
      <TabbedLayout />
    </>
  );
};
export default Home;
