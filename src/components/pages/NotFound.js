import { Typography } from "@material-ui/core";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Typography variant="h1">404 Not Found!</Typography>
      <Typography va variant="body1">
        The page you requested couldn't be found.
      </Typography>
    </>
  );
};

export default NotFound;
