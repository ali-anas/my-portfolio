import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";

import About from "../about/About";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
      className={classes.root}
    >
      {value === index && (
        <div square="true" className={classes.tabPanel}>
          {children}
        </div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    // minHeight: "100vh",
  },
  tabPanel: {
    margin: "20px 0",
    [theme.breakpoints.up("md")]: {
      margin: "20px 10%",
    },
    border: "0px",
  },
}));

export default function TabsWrappedLabel() {
  const classes = useStyles();
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        centered
      >
        <Tab value="one" label="About" {...a11yProps("one")} />
        <Tab value="two" label="Experience" {...a11yProps("two")} disabled />
        <Tab value="three" label="Skills" {...a11yProps("three")} />
        <Tab value="four" label="Projects" {...a11yProps("four")} />
      </Tabs>
      <TabPanel value={value} index="one">
        <About />
      </TabPanel>
      <TabPanel value={value} index="two">
        Experience
        {/* <Experience /> */}
      </TabPanel>
      <TabPanel value={value} index="three">
        <Skills />
      </TabPanel>
      <TabPanel value={value} index="four">
        <Projects />
      </TabPanel>
    </div>
  );
}
