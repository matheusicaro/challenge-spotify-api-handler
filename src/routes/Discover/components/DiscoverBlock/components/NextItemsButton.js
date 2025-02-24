import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

export default function NextItemsButton({ isLoading, onClickNextItems }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Tooltip title="Click to load more items">
        <span>
          <IconButton
            onClick={onClickNextItems}
            loading={isLoading}
          >
            <ArrowForwardIos />
          </IconButton>
        </span>
      </Tooltip>
    </Box>
  );
}

