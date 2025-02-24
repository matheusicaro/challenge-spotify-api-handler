import React from "react";
import { useWeeklyReleases } from "../../../hooks";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";

const WeeklyReleases = () => {
  const { items, isError, isLoading, onClickNextItems, isAllItemsLoaded } = useWeeklyReleases();

  return (
    <DiscoverBlock
      text="RELEASED THIS WEEK"
      id="released"
      errorMessage="Something is bad on loading the releases of this week. Try again later or refresh the page"
      items={items}
      isError={isError}
      isLoading={isLoading}
      onClickNextItems={onClickNextItems}
      isAllItemsLoaded={isAllItemsLoaded}
    />
  );
};

export default WeeklyReleases;

