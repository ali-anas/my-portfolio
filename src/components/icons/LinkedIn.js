import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const LinkedIn = () => {
  return (
    <>
      <Tooltip title="LinkedIn" arrow>
        <Avatar>
          <LinkedInIcon />
        </Avatar>
      </Tooltip>
    </>
  );
};

export default LinkedIn;
