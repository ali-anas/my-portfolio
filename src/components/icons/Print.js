import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import PrintIcon from "@material-ui/icons/Print";

const Print = () => {
  return (
    <>
      <Tooltip title="Resume" arrow>
        <Avatar>
          <PrintIcon />
        </Avatar>
      </Tooltip>
    </>
  );
};

export default Print;
