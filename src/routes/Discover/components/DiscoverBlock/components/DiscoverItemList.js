import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

import DiscoverItem from "./DiscoverItem";
import NextItemsButton from "./NextItemsButton";

import "../styles/_discover-block.scss";

export default function DiscoverItemList({
  id,
  items,
  isError,
  isLoading,
  isAllItemsLoaded,
  errorMessage,
  onClickNextItems,
}) {
  const notFoundData = !isLoading && !isError && items.length === 0;

  return (
    <div
      className="discover-block__row"
      id={id}
    >
      {items.map((item, index) => (
        <DiscoverItem
          key={`${index}${item.name}`}
          images={item.images}
          name={item.name}
          href={item.href}
        />
      ))}

      {isLoading && (
        <Box sx={{ display: "flex", alignItems: "center", padding: "0 50%" }}>
          <CircularProgress />
        </Box>
      )}

      {!isLoading && isError && (
        <Box sx={{ display: "flex", height: "fit-content" }}>
          <Alert severity="error">{errorMessage}</Alert>
        </Box>
      )}

      {notFoundData && (
        <Box sx={{ display: "flex", height: "fit-content" }}>
          <p>Not found data for your user 😢</p>
        </Box>
      )}

      {!notFoundData && !isAllItemsLoaded && (
        <NextItemsButton
          isLoading={isLoading}
          onClickNextItems={onClickNextItems}
        />
      )}
    </div>
  );
}