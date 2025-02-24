import React from "react";
import { useCategories } from "../../../hooks";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";

const BrowseCategories = () => {
  const { items, isError, isLoading, isAllItemsLoaded, loadNextItems } = useCategories();

  return (
    <DiscoverBlock
      text="BROWSE"
      id="browse"
      errorMessage="Something is bad on loading the browse categories. Try again later or refresh the page"
      items={items}
      isError={isError}
      isLoading={isLoading}
      isAllItemsLoaded={isAllItemsLoaded}
      onClickNextItems={loadNextItems}
    />
  );
};

export default BrowseCategories;

