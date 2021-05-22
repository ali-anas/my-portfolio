import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import GitHubIcon from "@material-ui/icons/GitHub";

const Github = () => {
  return (
    <>
      <Tooltip title="Github" arrow>
        <Avatar>
          <GitHubIcon />
        </Avatar>
      </Tooltip>
    </>
  );
};

export default Github;
