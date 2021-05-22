import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import EmailIcon from "@material-ui/icons/Email";

const Email = () => {
  return (
    <>
      <Tooltip title="Email" arrow>
        <Avatar>
          <EmailIcon />
        </Avatar>
      </Tooltip>
    </>
  );
};

export default Email;
